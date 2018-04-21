import React, { Component } from 'react';
import {Router,browserHistory, Route, IndexRoute} from 'react-router'
import HomeShowContainer from './containers/HomeShowContainer';
import CauseIndexContainer from './containers/CauseIndexContainer';
import CauseShowContainer from './containers/CauseShowContainer';
import AddEventContainer from './containers/AddEventContainer';
import './App.css';


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={HomeShowContainer} />
      <Route path='/causes' component={CauseIndexContainer} />
      <Route path='/causes/:id' component={CauseShowContainer} />
    </Router>
  )
}
export default App;
