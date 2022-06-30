import React from 'react';

class PageThree extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onSubmit = e => {

  }

  onClick = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>
          Page Three
        </h2>
        <div className="buttons">
          <button onClick={this.props.goBack}>Go Back</button>
        </div>
        <form style={{display: 'grid'}}>
          CC#: <input type="text" value={this.props.CC} onChange={this.props.handleCC}></input>
          Expiration Date: <input type="text" value={this.props.exp} onChange={this.props.handleExp}></input>
          CVV: <input type="text" value={this.props.cvv} onChange={this.props.handleCVV}></input>
          Billing Zip: <input type="text" value={this.props.bzip} onChange={this.props.handleBzip}></input>
          <button onClick={this.onClick}>Complete Order</button>
        </form>
      </div>
    )
  }
}

export default PageThree;