import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
// import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage'
import userService from '../../utils/userService';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {
  state = {
    apiResponse: "",
    users: null
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser
    })
  }
  handleLogout = () => {
    userService.logout()
    this.setState({
      user: null
    })
  }


  /* ---- Lifecycle Methods ----*/
  componentDidMount() {
    fetch('http://localhost:3001/api/notions')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />}
          />

          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />}
          />




        </Switch>
        <Link className="Signup" to={'/signup'}>Signup</Link>
        <div className="LoginPage"><Link to={'/login'}>Login</Link></div>
        <div className="App">
          <header className='header-footer'>N O T I O N </header>
          <p>{this.state.apiResponse}</p>
        </div>
      </div>
    )
  };

}

export default App;