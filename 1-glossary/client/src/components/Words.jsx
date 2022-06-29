import React from 'react';

class Words extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word,
      definition: this.props.definition
    }
  }

  render() {
    return (
      <div className='word'>
        <h3>{this.state.word}</h3>
        <p>{this.state.definition}</p>
      </div>
    )
  }
}

export default Words;