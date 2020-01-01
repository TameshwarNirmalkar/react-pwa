import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
// import { WaitingComponent } from './common/lazyloading';

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/aboutus/About'));


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Header
        </header>
        <main>
        <Router>
          <Switch>
            <Route path="/about">
              <Suspense fallback={'.....Loading'}>
                <About />
              </Suspense>
            </Route>
            <Route path="/">
              <Suspense fallback={'.....Loading'}>
                <Home />
              </Suspense>
            </Route>
          </Switch>
        </Router>
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
