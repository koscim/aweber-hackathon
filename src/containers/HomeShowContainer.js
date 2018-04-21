import React, { Component } from 'react';
import logo from '../assets/dog_face.jpeg';
import ArticleIndexContainer from './ArticlesIndexContainer';

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
          <ArticleIndexContainer />
        </div>
      </div>
    )
  }
}

export default HomeShowContainer;
