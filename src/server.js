const translate = require('./translator')

const text = "quiero trabajar con los mejores"
const targetLang = 'en'

console.log(translate);

translate.translateText(text, targetLang,(err, result) => {

  if (err) {
    next(err);
    return;
  }
  console.log(result);

});