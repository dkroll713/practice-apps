import React from "react";
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Words from './components/Words.jsx';
import Create from './components/Create.jsx';
import Grep from './components/Grep.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      display: false,
      results = [],
    }
    this.getWords = this.getWords.bind(this);
    this.grep = this.grep.bind(this);
  }

  getWords() {
    axios.get('/words')
    .then( response => {
      console.log('response:', response)
      this.setState({
        words: response.data
      })
    })
    .catch(error => {
      console.log('error');
    })
  }
  componentDidMount() {
    this.getWords()
  }

  grep = term => {
    var words = this.state.words;
    var newWords = [];
    for (var x = 0; x < words.length; x++) {
      if (words[x].word.includes(term) || words[x].definition.includes(term)) {
        newWords.push(words[x]);
      }
    }
    this.setState({
      words: newWords
    })
  }

  render() {
    return (
      <div>
        <h1>Word Creation</h1>
        <Create refresh={this.getWords}/>
        <h1>Word Lookup</h1>
        <div className="searches">
          <Search refresh={this.getWords}/>
          <Grep grep={this.grep} />
        </div>
        <h2>Word List</h2>
        {this.state.words.map(word => {
          return <Words key={word.word}
          className="entry"
          word={word.word}
          definition={word.definition}
          refresh={this.getWords} />
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));