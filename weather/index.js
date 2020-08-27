"use strict";
const axios = require("axios");
//https://www.weatherbit.io/account/dashboard
const config = require("../config/index"); 

const formatData = data => {
    return {
      lokacija: `${data.city_name}, ${data.country_code}`,
      temperatura: data.data[0].temp,
      //vreme: data.data[0].weather.description,
      kod: data.data[0].weather.code,
      forecast: data.data.map(day => {
        return {
          datum: day.valid_date,
          kod: day.weather.code,
          //vreme: day.weather.description,
        };
      })
    };
  };

let getWeather = location => {                                    
    return new Promise(async (resolve, reject) => {
      try {
        const weatherConditions = await axios.get(           
          "https://api.weatherbit.io/v2.0/forecast/daily",
          {
              params: {
                  key: config.weatherService.apiKey,
                  city: location,
                  days: 3,
                  //lang: "sr"
              }
          }
        );
        resolve(formatData(weatherConditions.data));
      } catch (error) {
          reject(error);
      }
    });
  };

  module.exports = getWeather;