import React from 'react';

class Grep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this);
  }

  handleChange = e => {
    this.setState({
      entry: e.target.value,
    })
  }

  onClick = e => {
    this.props.grep(this.state.entry)
  }

  render() {
    return (
      <div>
        <input
        type="text"
        placeholder="search this glossary"
        onChange={this.handleChange}></input>
        <button onClick={this.onClick}>Search</button>
      </div>
    )
  }
}

export default Grep;