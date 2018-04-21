import React, { Component } from 'react';
import logo from '../assets/dog_face.jpeg';
import ArticlesIndexContainer from './ArticlesIndexContainer';
import ArticleFormContainer from './ArticleFormContainer';
import EventsIndexContainer from './EventsIndexContainer';

class HomeShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Petition that!</h1>
        </header>
        <div className="App-body">
          To get started, edit <code>src/App.js</code> and save to reload.
          <ArticlesIndexContainer />
          <ArticleFormContainer />
          <EventsIndexContainer />
        </div>
      </div>
    )
  }
}

export default HomeShowContainer;
