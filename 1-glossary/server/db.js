const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary')
.then(console.log('\n\n ~~~~~~~~~~ connected to mongo ~~~~~~~~~~ \n\n'))

const { Schema } = mongoose;

const wordSchema = new Schema({
  word: {type: String, unique: true},
  definition: String,
})

const Word = mongoose.model('Word', wordSchema);

save = (word) => {
  var doc = new Word()
  doc.word = word.word;
  doc.definition = word.definition;
  doc.save(doc, err => {
    if (err) {
      console.log('\nword already saved\n')
    } else {
      console.log('\n ~~~~~~~~~~ saved word ~~~~~~~~~~\n')
    }
  });
}

deleteDoc = (word) => {
  console.log(word);
  Word.findOneAndDelete({word: {$eq:word.word}}, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('~~~~~~~~~~ deleted word:', word.word, '~~~~~~~~~~')
    }
  })
}

edit = (word) => {
  console.log('edit word:', word)
  return Word.findOneAndUpdate({word: word.originalWord}, {word: word.word, definition: word.definition}, {upsert:false})
}

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

module.exports.save = save
module.exports.Word = Word;
module.exports.delete = deleteDoc;
module.exports.edit = edit;