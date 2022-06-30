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
      <button onClick={this.onClick}>Press to check out</button>
    )
  }
}

export default Checkout