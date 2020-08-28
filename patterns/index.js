const patternDict = [
    {
      pattern: "\\b(?<greeting>c?ć?a+o+|p?o*[zy]+dra+v+o*|he+ll*o+u*|h[ie]+j*y*|dobar\\s[dan|jutro|vec?č?e]{3,5}|po+z?y?dra+v)\\b",
      intent: "Hello"
    },
    {
      pattern: "\\b(vi+[dđ]?[ia]*mo+\\sse+|[cč]?u+je+mo+\\sse+|do+vi+[djđ]+e+nja*c?e*|zbo+go+m|exi+t|i+za+[djđi]+|na\\sve(z|y)i\\ssmo|lak[ua]+\\sn[ocć]+)\\b",
      intent: "Exit"
    },
    {
      pattern: "[za]{0,2}hva+la+n?",
      intent: "Thanks"
    },



    {
      pattern: "\\b(vreme|prognoza?u?)\\b\\s[a-zćčšžđ ]*\\b(u|za)\\b\\s[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)(?:\\?*)$",
      intent: "CurrentWeather"
    },
    {
      pattern: "\\b(u|za)\\b\\s[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\s[a-zćčšžđ ]*\\b(vreme|prognoza?u?)\\b\\s[a-zćčšžđ ]*(?:\\?*)$",
      intent: "CurrentWeather"
    },



    {
      pattern:
        "[a-zćčšžđ ]*\\b(vreme|prognoza?u?)\\b\\s[a-zćčšžđ ]*\\b(u |za )[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\s\\b(?<time>prekosutra|sutra)\\b[ a-zćčšžđ ]*(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },
    {
      pattern:
        "[a-zćčšžđ ]*\\b(vreme|prognoza?u?)\\b\\s[a-zćčšžđ ]*\\b(?<time>prekosutra|sutra)\\b\\s[a-zćčšžđ ]*\\b(u |za )[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },
    {
      pattern:
        "[a-zćčšžđ ]*\\b(?<time>prekosutra|sutra)\\b\\s[a-zćčšžđ ]*\\b(vreme|prognoza?u?)\\b\\s[a-zćčšžđ ]*\\b(u |za )[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },
    {
      pattern:
        "[a-zćčšžđ ]*\\b(?<time>prekosutra|sutra)\\b\\s[a-zćčšžđ ]*\\b(u |za )[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\s\\b(vreme|prognoza?u?)\\b[ a-zćčšžđ ]*(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },
    {
      pattern:
        "[a-zćčšžđ ]*\\b(u |za )[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\s\\b(?<time>prekosutra|sutra)\\b\\s[a-zćčšžđ ]*\\b(vreme|prognoza?u?)\\b[ a-zćčšžđ ]*(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },
    {
      pattern:
        "[a-zćčšžđ ]*\\b(u |za )[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\s\\b(vreme|prognoza?u?)\\b\\s[a-zćčšžđ ]*\\b(?<time>prekosutra|sutra)\\b[ a-zćčšžđ ]*(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },



    {
      pattern:
        "\\b(?<weather>(ki[ščsicaetn]{2,7}|plju[sakoviščne]{3,5})|grada?|[su]{0,2}sne[žyzicag]{1,4}|[iz]{0,2}magl[icae]{1,3}|smog[a]{0,1}|pra(š|s)in[aeom]{1,2}|pe(s|š)[akčno]{2,4}|oblač?c?no|(oblaka?|veda?ro?|sun(c|č)a[no]{0,2}))\\b\\s[a-zćčšžđ ]*\\bu\\s[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\s\\b(?<time>prekosutra|sutra|danas)\\b[ a-zćčšžđ ]*(?:\\?*)$",
      intent: "WeatherForecast"
    },
    {
      pattern:
        "\\b(?<weather>(ki[ščsicaetn]{2,7}|plju[sakoviščne]{3,5})|grada?|[su]{0,2}sne[žyzicag]{1,4}|[iz]{0,2}magl[icae]{1,3}|smog[a]{0,1}|pra(š|s)in[aeom]{1,2}|pe(s|š)[akčno]{2,4}|oblač?c?no|(oblaka?|veda?ro?|sun(c|č)a[no]{0,2}))\\b\\s[a-zćčšžđ ]*\\b(?<time>prekosutra|sutra|danas)\\b\\s[a-zćčšžđ ]*\\bu\\s[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)(?:\\?*)$",
      intent: "WeatherForecast"
    },
    {
      pattern:
        "\\b(?<time>prekosutra|sutra|danas)\\b\\s[a-zćčšžđ ]*\\b(?<weather>(ki[ščsicaetn]{2,7}|plju[sakoviščne]{3,5})|grada?|[su]{0,2}sne[žyzicag]{1,4}|[iz]{0,2}magl[icae]{1,3}|smog[a]{0,1}|pra(š|s)in[aeom]{1,2}|pe(s|š)[akčno]{2,4}|oblač?c?no|(oblaka?|veda?ro?|sun(c|č)a[no]{0,2}))\\b\\s[a-zćčšžđ ]*\\bu\\s[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)(?:\\?*)$",
      intent: "WeatherForecast"
    },
    {
      pattern:
        "\\b(?<time>prekosutra|sutra|danas)\\b\\s[a-zćčšžđ ]*\\bu\\s[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\s\\b(?<weather>(ki[ščsicaetn]{2,7}|plju[sakoviščne]{3,5})|grada?|[su]{0,2}sne[žyzicag]{1,4}|[iz]{0,2}magl[icae]{1,3}|smog[a]{0,1}|pra(š|s)in[aeom]{1,2}|pe(s|š)[akčno]{2,4}|oblač?c?no|(oblaka?|veda?ro?|sun(c|č)a[no]{0,2}))\\b[ a-zćčšžđ ]*(?:\\?*)$",
      intent: "WeatherForecast"
    },
    {
      pattern:
        "\\bu\\s[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\s\\b(?<time>prekosutra|sutra|danas)\\b\\s[a-zćčšžđ ]*\\b(?<weather>(ki[ščsicaetn]{2,7}|plju[sakoviščne]{3,5})|grada?|[su]{0,2}sne[žyzicag]{1,4}|[iz]{0,2}magl[icae]{1,3}|smog[a]{0,1}|pra(š|s)in[aeom]{1,2}|pe(s|š)[akčno]{2,4}|oblač?c?no|(oblaka?|veda?ro?|sun(c|č)a[no]{0,2}))\\b[ a-zćčšžđ ]*(?:\\?*)$",
      intent: "WeatherForecast"
    },
    {
      pattern:
        "\\bu\\s[a-zćčšžđ ]*\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\s\\b(?<weather>(ki[ščsicaetn]{2,7}|plju[sakoviščne]{3,5})|grada?|[su]{0,2}sne[žyzicag]{1,4}|[iz]{0,2}magl[icae]{1,3}|smog[a]{0,1}|pra(š|s)in[aeom]{1,2}|pe(s|š)[akčno]{2,4}|oblač?c?no|(oblaka?|veda?ro?|sun(c|č)a[no]{0,2}))\\b\\s[a-zćčšžđ ]*\\b(?<time>prekosutra|sutra|danas)\\b[ a-zćčšžđ ]*(?:\\?*)$",
      intent: "WeatherForecast"
    },
    
  ];
  
  module.exports = patternDict;
  