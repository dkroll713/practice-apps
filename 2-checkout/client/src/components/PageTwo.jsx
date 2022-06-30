import React from 'react';

class PageTwo extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>
          Page Two
        </h2>
        <div className="buttons">
          <button onClick={this.props.goBack}>Go Back</button>
          <button onClick={this.props.goNext}>Next Page</button>
        </div>
        <form style={{display: 'grid'}}>
          Address Line 1: <input type="text" onChange={this.props.handleAddr1} value={this.props.address1}></input>
          Address Line 2: <input type="text" onChange={this.props.handleAddr2} value={this.props.address2}></input>
          City: <input type="text" onChange={this.props.handleCity} value={this.props.city}></input>
          State: <input type="text" onChange={this.props.handleState} value={this.props.state}></input>
          Zip Code: <input type="text" onChange={this.props.handleZip} value={this.props.zip}></input>
          Phone: <input type="text" onChange={this.props.handlePhone} value={this.props.phone}></input>
        </form>
      </div>
    )
  }
}

export default PageTwo;