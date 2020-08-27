'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const FBinterface = require('./fbinterface');

// Vremenko - chatbot in terminal
const matcher = require('./matcher');
const weather = require('./weather');
const {currentWeather, forecastNoWeatherInput, forecastWeather} = require('./parser');

const app = express();
const PORT = process.env.PORT || 3000;
const f = new FBinterface(config.fb);

app.get('/', (req, res) => {
  //res.send('Zdraaavo svete! :)');
  f.registerHook(req, res)
});

app.post('/', bodyParser.json({
  verify: f.verifySignature.call(f)
}));

app.post('/', (req, res, next) => {
  // Messages will be received here if the signature goes through
  // we will pass the messages to FBinterface for parsing
  return f.incoming(req, res, async data =>{
    //console.log(data);
    try {
      if(data.type === 'text') {
        matcher(data.content, async resp => {
          switch(resp.intent) {
            case 'Hello':
              await f.txt(data.sender, `Hej, ${resp.entities.greeting} i Vama! Dobrodošli kod Vremenka!\n\nJa sam četbot koji Vam na srpskom jeziku može dati opis vremena za danas, sutra ili prekosutra za bilo koji grad na svetu, samo me upitajte!\nNpr. - Kakvo je vreme u Njujorku, ili pak - da li će padati kiša sutra u Beogradu, ili možda nešto poput - hoce li biti oblaka u novom sadu...\n\nP.S. Naravno, kao "rule-based" četbot, nikako nisam savršen - trenutno poznajem samo latinicu s' obzirom da je u Messenger komunikaciji ona najzastupljenija. Po nekad, ako ne prepoznam grad koji tražite, probajte mi pomoći unosom tog grada u nominativu (ahh ti padeži, nekada me zaista zbunjuju... zato ja obožavam najtopliji Niš, Vranje, Pirot :) )`);
              break;

            case 'Thanks':
              await f.txt(data.sender,'Nema na čemu i drugi put! :)');
              break;

            case 'Exit':
              await f.txt(data.sender,'Prijatan dan! :)');
              break;

            case 'CurrentWeather':
              await f.txt(data.sender, 'Dozvolite mi da proverim...');
              let cwData = await weather(resp.entities.city, 'current');
              let cwResult = currentWeather(cwData);
              await f.txt(data.sender, cwResult);
              break;

            case 'WeatherForecastNoWeatherInput':
              await f.txt(data.sender, 'Dozvolite mi da proverim...');
              let wfnwiData = await weather(resp.entities.city);
              let wfnwiResult = forecastNoWeatherInput(wfnwiData, resp.entities);
              await f.txt(data.sender, wfnwiResult);
              break;

            case 'WeatherForecast':
              await f.txt(data.sender, 'Dozvolite mi da proverim...');
              let wfData = await weather(resp.entities.city);
              let wfResult = forecastWeather(wfData, resp.entities);
              await f.txt(data.sender, wfResult);
              break;

            default: {
              await f.txt(data.sender, "Izvinite, ne znam šta ste mislili :(");
            }
          }
        });
      }

      // if(data.content === 'zdravo bote'){
      //   await f.txt(data.sender, 'zdravo od Vremenka :)');
      //   await f.img(data.sender, 'https://i.pinimg.com/originals/21/df/72/21df72fbbc1bbe0f7496b06ce60fb7cb.jpg');
      // }
    } catch (error) {
      console.log(e);
    }
    
  });
});
 

app.listen(PORT, () => 
  console.log(`FBinterface Bot Servis je aktivan na PORT-u ${PORT}`
));
