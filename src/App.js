import React, { Component, Fragment } from 'react';

import { Router } from 'react-router-dom';
import history from './components/history';
import Routes from './components/routes';
import Footer from './components/footer';

import LoginModal from './components/screens/login';

import './App.css';

class App extends Component {

  render() {
    return (
      <Fragment>
        <LoginModal/>
        <Router history={history}>
          <Fragment>
            <Routes/>
            <Footer/>
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
