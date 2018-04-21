import React, { Component } from 'react';
import {Router,browserHistory, Route, IndexRoute} from 'react-router'
import HomeShowContainer from './containers/HomeShowContainer';
import CauseIndexContainer from './containers/CauseIndexContainer';
import './App.css';


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={HomeShowContainer} />
      <Route path='/causes' component={CauseIndexContainer} />
    </Router>
  )
}
export default App;
