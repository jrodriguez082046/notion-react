import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    apiResponse: ""
  }

  callAPI() {
    fetch('http://localhost:3001/api/notions')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.apiResponse}</p>
      </div>
    )
  };

}

export default App;