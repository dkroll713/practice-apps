require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const words = require('./models/definitions.js')
const db = require('./db.js')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.get('/words', (req, res) => {
  var words = [];
  db.Word.find({}).then((data) => {
    for (var x = 0; x < data.length; x++) {
      // console.log(data[x].word)
      var wordObj = {word: data[x].word, definition: data[x].definition}
      // console.log(wordObj)
      words.push(wordObj)
    }
    console.log(words);
    res.send(words)
  })
})

app.post('/wordSubmit', (req, res) => {
  var word = req.body.word;
  words.getWord(word)
  res.status(201).send('word received');
})

app.post('/wordCreate', (req, res) => {
  var word = req.body
  db.save(word);
  res.send('received');
})

app.put('/words', (req, res) => {
  console.log(req.body)
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
