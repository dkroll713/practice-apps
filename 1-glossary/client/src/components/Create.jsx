import React from 'react';
const axios = require('axios');

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word:'',
      definition: '',
    }
    this.handleWord = this.handleWord.bind(this);
    this.handleDefinition = this.handleDefinition.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleWord = e => {
    this.setState({
      word: e.target.value,
    })
  }
  handleDefinition = e => {
    this.setState({
      definition: e.target.value,
    })
  }

  onClick = e => {
    e.preventDefault();
    var word = {"word": this.state.word, "definition": this.state.definition}
    console.log(word);
    axios.post('/wordCreate', word)
    setTimeout(this.props.refresh, 250)
  }

  render() {
    return (
      <div className="create">
        <input className="createWord" type="text" placeholder="word name" onChange={this.handleWord}></input>
        <textarea className="createDefinition" type="text" placeholder="definition" onChange={this.handleDefinition}></textarea>
        <button className="submit" onClick={this.onClick}>Submit a word</button>
      </div>
    )
  }
}

export default Create;