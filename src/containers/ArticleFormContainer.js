import React, { Component } from 'react';
import TextField from '../components/TextField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      feedUrl: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClearForm = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      feedUrl: ''
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let formPayload = {
      name: this.state.name,
      feedUrl: this.state.feedUrl
    }
    this.handleClearForm(event);
  }

  render() {
    return (
      <div style={{backgroundColor: '#FFFFFF', width: '200px', margin: '0 auto', borderRadius: '5px', borderWidth: '2px'}}>
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.name}
            handlerFunction={this.handleInputChange}
            name='name'
            label='Name'
          />
          <TextField
            content={this.state.feedUrl}
            label='Article Url'
            name='feedUrl'
            handlerFunction={this.handleInputChange}
          />
          <input className="button" type="submit" value="Submit" />
          <input className="button" type="button" value="Clear" onClick={this.handleClearForm} />
        </form>
      </div>
    )
  }
}

export default ArticleFormContainer;
