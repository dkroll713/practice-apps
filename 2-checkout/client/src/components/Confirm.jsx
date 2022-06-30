import React from 'react';
const axios = require('axios');

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick;
  }

  onClick = e => {
    axios.post('/checkout', {data: this.props})
    .then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div style={{display: 'grid', justifyContent: 'center'}}>
        <h2>Confirm the details below:</h2>
        <button onClick={this.props.goBack}>Go Back</button>

        <div style={{display: 'grid', marginTop: '25px'}}>
          <h3>Account Details</h3>
          <p>Name: {this.props.name}</p>
          <p>Email Address: {this.props.email}</p>
          <p>Phone Number: {this.props.phone}</p>
        </div>

        <div style={{display:'grid', marginTop: '25px'}}>
          <h3>Billing Details</h3>
          <div style={{display:'grid', marginTop: '12px'}}>
            <h4>
              Billing Address
            </h4>
              <p>{this.props.address1}</p>
              <p>{this.props.address2}</p>
              <p>{this.props.city}, {this.props.state} {this.props.zip}</p>
          </div>
          <div style={{marginTop: '12px'}}>
            <h4>
              Card Details
            </h4>
            <p># : {this.props.cc}</p>
            <p>Exp: {this.props.exp}</p>
            <p>CVV: {this.props.cvv}</p>
            <p>Billing Zip: {this.props.bzip}</p>
          </div>
        </div>
        <button onClick={this.onClick}>Confirm Order and Purchase</button>
      </div>
    )
  }
}

export default Confirm;