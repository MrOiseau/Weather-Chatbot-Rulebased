'use strict';

if(process.env.NODE_ENV === 'production') {
  module.exports = {
    fb: {
      pageAccessToken: process.env.pageAccessToken,
      verifyToken: process.env.verifyToken,
      appSecret: process.env.appSecret
    },
    weatherService: {
      apiKey: process.env.apiKey
    }
  }
} else {
  module.exports = require('./development.json');
}