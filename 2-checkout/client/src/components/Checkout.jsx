import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = e => {
    this.props.nextPage();
  }

  render() {
    return (
      <button onClick={this.onClick}>Check Out</button>
    )
  }
}

export default Checkout