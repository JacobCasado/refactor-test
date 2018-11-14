"use strict";

const Translate = require('@google-cloud/translate');

const TranslateService = {};
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = (content, targetLang, next)=> {

  const calls = [];

  calls.push((callback) => {

    translate
      .translate( content, targetLang )
      .then(results => {
        return callback(null, results[0]);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  });

  async.waterfall(calls,(err, response) => {
    if (next) next(err, response);
  });
};


module.exports = TranslateService;
