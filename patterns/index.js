const patternDict = [
    {
      pattern: "\\b(?<greeting>c?ć?a+o+|p?o*[zy]+dra+v+o*|he+ll*o+u*|h[ie]+j*y*|dobar\\s[dan|jutro|vec?č?e]{3,5}|po+z?y?dra+v)\\b",
      intent: "Hello"
    },
    {
      pattern: "\\b(vi+[dđ]?[ia]*mo+\\sse+|[cč]?u+je+mo+\\sse+|do+vi+[djđ]+e+nja*c?e*|zbo+go+m|exi+t|i+za+[djđi]+|lak[ua]+\\sn[ocć]+)\\b",
      intent: "Exit"
    },
    {
      pattern: "[za]{0,2}hva+la+n?",
      intent: "Thanks"
    },
    {
      pattern: "vreme\\s(u|za)\\s\\b(?<city>.+)",
      intent: "CurrentWeather"
    },
    {
      pattern: "(u|za)\\s\\b(?<city>.+)\\svreme",
      intent: "CurrentWeather"
    },
    
    {
      pattern:
        "\\b(?<time>prekosutra|sutra|danas)\\b\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?(vreme|prognoza?u?)\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?(u\\s|za\\s)?\\b[a-zžšćčđ]+[ a-zžšćčđ]+?(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },
    {
      pattern:
        "\\b(?<time>prekosutra|sutra|danas)\\b\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?(u\\s|za\\s)?\\b[a-zžšćčđ]+[ a-zžšćčđ]+?\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?\\b(vreme|prognoza?u?)(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },

    {
      pattern:
        " (vreme|prognoza?u?)\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?(za\\s)?\\b(?<time>prekosutra|sutra|danas)\\b\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?(u\\s|za\\s)?\\b[a-zžšćčđ]+[ a-zžšćčđ]+?(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },
    {
      pattern:
        " (vreme|prognoza?u?)\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?(u\\s|za\\s)?\\b[a-zžšćčđ]+[ a-zžšćčđ]+?\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?(za\\s)?\\b(?<time>prekosutra|sutra|danas)\\b(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },

    {
      pattern:
        "\\b[a-zžšćčđ]+[ a-zžšćčđ]+?\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?(za\\s)?\\b(?<time>prekosutra|sutra|danas)\\b(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?\\s(vreme|prognoza?u?)(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },
    {
      pattern:
        "\\b[a-zžšćčđ]+[ a-zžšćčđ]+?\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)? (vreme|prognoza?u?)\\s(kakvo?a?\\s)?(je\\s|ć?c?e\\s)?(da\\sbude\\s|biti\\s)?(za\\s)?\\b(?<time>prekosutra|sutra|danas)\\b(?:\\?*)$",
      intent: "WeatherForecastNoWeatherInput"
    },

    {
      pattern:
        "\\b(?<weather>(ki[ščsicaetn]{2,7}|plju[sakoviščne]{3,5})|grada?|[su]{0,2}sne[žyzicag]{1,4}|[iz]{0,2}magl[icae]{1,3}|smog[a]{0,1}|pra(š|s)in[aeom]{1,2}|pe(s|š)[akčno]{2,4}|oblač?c?no|(oblaka?|veda?ro?|sun(c|č)a[no]{0,2}))\\b\\su\\s\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)\\b(?<time>prekosutra|sutra|danas)(?:\\?*)$",
      intent: "WeatherForecast"
    },
    {
      pattern:
        "\\b(?<weather>(ki[ščsicaetn]{2,7}|plju[sakoviščne]{3,5})|grada?|[su]{0,2}sne[žyzicag]{1,4}|[iz]{0,2}magl[icae]{1,3}|smog[a]{0,1}|pra(š|s)in[aeom]{1,2}|pe(s|š)[akčno]{2,4}|oblač?c?no|(oblaka?|veda?ro?|sun(c|č)a[no]{0,2}))\\b\\s\\b(?<time>prekosutra|sutra|danas)\\su\\s\\b(?<city>[a-zžšćčđ]+[ a-zžšćčđ]+?)(?:\\?*)$",
      intent: "WeatherForecast"
    },
    
  ];
  
  module.exports = patternDict;
  