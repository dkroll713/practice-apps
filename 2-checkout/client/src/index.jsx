import React from "react";
// import { render } from "react-dom";
import ReactDOM from 'react-dom';
import Checkout from './components/Checkout.jsx';
import PageOne from './components/PageOne.jsx';
import PageTwo from './components/PageTwo.jsx';
import PageThree from './components/PageThree.jsx';
import Confirm from './components/Confirm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'start',
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cc: '',
      exp: '',
      cvv: '',
      bzip: '',
    }
    this.page1 = this.page1.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleAddr1 = this.handleAddr1.bind(this);
    this.handleAddr2 = this.handleAddr2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleCC = this.handleCC.bind(this);
    this.handleExp = this.handleExp.bind(this);
    this.handleCVV = this.handleCVV.bind(this);
    this.handleBzip = this.handleBzip.bind(this);
  }

  page1() {
    this.setState({
      page: 'pageOne',
    })
  }

  goBack() {
    if (this.state.page === 'pageOne') {
      this.setState({
        page: 'start',
      })
    } else if (this.state.page === 'pageTwo') {
      this.setState({
        page: 'pageOne',
      })
    } else if (this.state.page === 'pageThree') {
      this.setState({
        page: 'pageTwo',
      })
    } else if (this.state.page === 'confirm') {
      this.setState({
        page: 'pageThree'
      })
    }
  }

  goNext() {
    if (this.state.page === 'start') {
      this.setState({
        page: 'pageOne'
      })
    } else if (this.state.page === 'pageOne') {
      this.setState({
        page: 'pageTwo',
      })
    } else if (this.state.page === 'pageTwo') {
      this.setState({
        page: 'pageThree',
      })
    } else if (this.state.page === 'pageThree') {
      this.setState({
        page: 'confirm'
      })
    }
  }

  handleName = e => {
    this.setState({
      name: e.target.value,
    })
  }

  handleEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }

  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  handleAddr1 = e => {
    this.setState({
      address1: e.target.value,
    })
  }

  handleAddr2 = e => {
    this.setState({
      address2: e.target.value,
    })
  }

  handleCity = e => {
    this.setState({
      city: e.target.value
    })
  }

  handleState = e => {
    this.setState({
      state: e.target.value
    })
  }

  handleZip = e => {
    this.setState({
      zip: e.target.value
    })
  }

  handlePhone = e => {
    this.setState({
      phone: e.target.value
    })
  }

  handleCC = e => {
    this.setState({
      cc: e.target.value
    })
  }

  handleExp = e => {
    this.setState({
      exp: e.target.value
    })
  }

  handleCVV = e => {
    this.setState({
      cvv: e.target.value
    })
  }

  handleBzip = e => {
    this.setState({
      bzip: e.target.value
    })
  }

  render() {
    if (this.state.page === 'start') {
      return (
        <div>
          <Checkout nextPage={this.page1} />
        </div>
      )
    } else if (this.state.page === 'pageOne') {
      return (
        <PageOne
        goBack={this.goBack}
        goNext={this.goNext}
        handleName={this.handleName}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}

        name={this.state.name}
        email={this.state.email}
        password={this.state.password}/>
      )
    } else if (this.state.page === 'pageTwo') {
      return (
        <PageTwo
        goBack={this.goBack}
        goNext={this.goNext}
        handleAddr1={this.handleAddr1}
        handleAddr2={this.handleAddr2}
        handleCity={this.handleCity}
        handleState={this.handleState}
        handleZip={this.handleZip}
        handlePhone={this.handlePhone}

        address1={this.state.address1}
        address2={this.state.address2}
        city={this.state.city}
        state={this.state.state}
        zip={this.state.zip}
        phone={this.state.phone}/>
      )
    } else if (this.state.page === 'pageThree') {
      return (
        <PageThree
        goBack={this.goBack}
        goNext={this.goNext}
        handleCC={this.handleCC}
        handleExp={this.handleExp}
        handleCVV={this.handleCVV}
        handleBzip={this.handleBzip}

        cc={this.state.cc}
        exp={this.state.exp}
        cvv={this.state.cvv}
        bzip={this.state.bzip}/>
      )
    } else if (this.state.page === 'confirm') {
      return (
        <Confirm
        goBack={this.goBack}

        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
        address1={this.state.address1}
        address2={this.state.address2}
        city={this.state.city}
        state={this.state.state}
        zip={this.state.zip}
        phone={this.state.phone}
        cc={this.state.cc}
        exp={this.state.exp}
        cvv={this.state.cvv}
        bzip={this.state.bzip}/>
      )
    }
  }
}

{/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}

// render(
//   <div>
//     <p>Hello, World!</p>
//     <p>
//       <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
//     </p>
//   </div>,
//   document.getElementById("root")
// );


ReactDOM.render(<App />, document.getElementById('root'));