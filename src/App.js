import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';
// import { WaitingComponent } from './common/lazyloading';
import HeaderComponent from './common/header';
import NavComponent from './common/navigation';
import MainRoutes from './common/routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent userName="Tameshwar" isLoggedIn="true"></HeaderComponent>
        <NavComponent></NavComponent>
        <main>
          <MainRoutes></MainRoutes>
        </main>
        <footer>Footer</footer>
      </div>
    )
  }
}

// export default App;
const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(App);