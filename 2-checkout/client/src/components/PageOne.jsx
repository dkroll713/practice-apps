import React from 'react';
const axios = require('axios');

class PageOne extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>
          Page One - Account Details
        </h2>
        <div className="buttons">
          <button onClick={this.props.goBack}>Go Back</button>
          <button onClick={this.props.goNext}>Next Page</button>
        </div>
        <form style={{display: 'grid'}}>
          Name: <input
          type="text"
          value={this.props.name}
          onChange={this.props.handleName}></input>
          Email Address: <input
          type="text"
          value={this.props.email}
          onChange={this.props.handleEmail}></input>
          Password: <input
          type="text"
          value={this.props.password}
          onChange={this.props.handlePassword}></input>
        </form>
      </div>
    )
  }
}

export default PageOne;