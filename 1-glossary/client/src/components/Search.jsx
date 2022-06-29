import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: '',
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.setState({
      entry: e.target.value,
    })
  }

  onClick = (e) => {
    e.preventDefault();
    console.log(this.state.entry);
    axios.post('/wordSubmit', {"word":this.state.entry})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
    setTimeout(this.props.refresh, 500)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter a word to look up" onChange={this.onChange}></input>
        <button onClick={this.onClick}>Search</button>
      </div>
    )
  }
}

export default Search;