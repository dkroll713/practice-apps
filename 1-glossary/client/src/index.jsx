import React from "react";
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Words from './components/Words.jsx';
import Create from './components/Create.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
    this.getWords = this.getWords.bind(this);
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

  render() {
    return (
      <div>
        <h1>Word Creation</h1>
        <Create refresh={this.getWords}/>
        <h1>Word Lookup</h1>
        <Search refresh={this.getWords}/>
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