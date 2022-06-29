import React from 'react';
const axios = require('axios');

class Words extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word,
      originalWord: '',
      definition: this.props.definition,
      edit: false,
    }
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.handleWord = this.handleWord.bind(this);
    this.handleDefinition = this.handleDefinition.bind(this);
  }

  onDelete = e => {
    console.log(this.state.word, ':', this.state.definition)
    var word = {"word": this.state.word, "definition": this.state.definition}
    axios.post('/deleteWords', word)
    .then(response => {
      console.log(response);
    })
    .then(this.props.refresh)
    // setTimeout(this.props.refresh, 200)
  }

  onEdit = e => {
    this.setState({
      edit: !this.state.edit,
      originalWord: this.state.word
    })
  }

  onSubmit = e => {
    var word = {"word": this.state.word, "definition": this.state.definition, "originalWord": this.state.originalWord}
    axios.put('/words', word)
    .then(res => {
      console.log('edit response:', res)
    })
  }

  onClick = e => {
    this.onEdit();
    this.onSubmit();
  }

  handleWord = e => {
    this.setState({
      word: e.target.value
    })
  }
  handleDefinition = e => {
    this.setState({
      definition: e.target.value
    })
  }

  render() {
    if (this.state.edit === false) {
      return (
        <div className='word'>
          <h3 className="titles">{this.state.word}</h3>
          <p>{this.state.definition}</p>
          <div className="buttons">
            <button onClick={this.onDelete}>Delete</button>
            <button onClick={this.onEdit}>Edit</button>
          </div>
        </div>
      )
    } else if (this.state.edit === true) {
      return (
        <div className='word'>
          <h3 className="titles">{this.state.word}</h3>
          <p>{this.state.definition}</p>
          <div className="buttons">
            <button onClick={this.onDelete}>Delete</button>
            <button onClick={this.onClick}>Submit</button>
          </div>
          <div className="create">
            <input
            className="createWord"
            type="text"
            value={this.state.word}
            onChange={this.handleWord}></input>
            <textarea
            className="createDefinition"
            type="text"
            value={this.state.definition}
            onChange={this.handleDefinition}></textarea>
          </div>
        </div>
      )
    }
  }
}

export default Words;