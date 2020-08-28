"use strict";

const dictionary = require("./dictionary");
const conditions = require("./conditions"); 
const moment = require("moment");

let getFeel = temp => {
  if (temp < 5) {
    return "smrzavajuće hladno";
  } else if (temp >= 5 && temp < 15) {
    return "prilično hladno";
  } else if (temp >= 15 && temp < 25) {
    return "umereno hladno";
  } else if (temp >= 25 && temp < 32) {
    return "prilično toplo";
  } else if (temp >= 32 && temp < 40) {
    return "veoma toplo";
  } else {
    return "ultra toplo";
  }
};

let getPrefix = (kodZaStanjeVremena, tense = "present") => {
  let findPrefix = dictionary[tense].find(item => {
    if(item.codes.indexOf(Number(kodZaStanjeVremena)) > -1){
      return true;
    }
  });
  return findPrefix.prefix || "";
};

let getVreme = (kodZaStanjeVremena) => {                        
  let findVreme = conditions.find(item => {
    if(item.code === kodZaStanjeVremena) {
      return true;
    }
  });
  return findVreme.label || "";
};

let getDate = day => {
  let dayStr = day.toLowerCase().trim();
  switch(dayStr){
    case "sutra":
      return moment().add(1, "d").format("YYYY-MM-DD");
    case "prekosutra":
      return moment().add(2, "d").format("YYYY-MM-DD");
    default:      //danas
      return moment().format("YYYY-MM-DD");
  }
}

let currentWeather = response => {
  if (response.lokacija) {
    const { lokacija, kod, temperatura } = response;
    return `Trenutno ${getPrefix(kod)} ${getVreme(kod)} u mestu ${lokacija}.\nSubjektivno je ${getFeel(Number(temperatura))} sa ${String(temperatura)} stepeni Celziusa.`;
  } else {
    return "Ne znam nista o ovoj lokaciji... Izvinite :(";
  }
};

let forecastNoWeatherInput = (response, data) => {
  if(response.lokacija){
    let parseDate = getDate(data.time);

    let { lokacija } = response;
    let { kod } = response.forecast.filter(i => i.datum === parseDate)[0];
    let dataTime = data.time.charAt(0).toUpperCase() + data.time.slice(1);

    return `${dataTime} ${getPrefix(kod, "future")} ${getVreme(kod)} u mestu ${lokacija}`;
  } else {
    return "Ne znam nista o ovoj lokaciji... Izvinite :(";
  }
};

let forecastWeather = (response, data) => {
  if(response.lokacija){
    let parseDate = getDate(data.time);

    let { lokacija } = response;
    let { kod } = response.forecast.filter(i => i.datum === parseDate)[0];

    let regEx = new RegExp(data.weather, "i");
    let testConditions = regEx.test(getVreme(kod));
    return `${testConditions ? "Da" : "Ne"}, ${getPrefix(kod, "future")} ${getVreme(kod)} ${data.time} u mestu ${lokacija}`;
  } else {
    return "Ne znam nista o ovoj lokaciji... Izvinite :(";
  }
};


module.exports = {
  currentWeather,
  forecastNoWeatherInput,
  forecastWeather
};
