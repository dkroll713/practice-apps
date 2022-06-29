const axios = require('axios');
const db = require('../db.js')

var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const getWord = (word) => {
  axios.get(url + word)
  .then(res => {
    console.log('\ndictionary word:', res.data[0].word)
    console.log('dictionary definition:', res.data[0].meanings[0].definitions[0].definition);
    var definitions = res.data[0].meanings[0].definitions;
    var word = {word: res.data[0].word, definition: definitions[0].definition}
    console.log(word);
    db.save(word);
  })
  .catch(err => {
    console.log(err);
  })
}

module.exports.getWord = getWord;