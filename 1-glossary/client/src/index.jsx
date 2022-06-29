import React from "react";
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx'
import Words from './components/Words.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
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
        <h1>Word Lookup</h1>
        <Search />
        <h2>Word List</h2>
        {this.state.words.map(word => {
          return <Words className="entry" word={word.word} definition={word.definition} />
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));