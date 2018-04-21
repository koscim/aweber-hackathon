import React, {Component} from 'react';
import {Router,browserHistory, Route, IndexRoute, Link} from 'react-router';
import TextField from '../components/TextField'

class AddEventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      name: '',
      link: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleLink = this.handleLink.bind(this)
  }

  handleClearForm(event){
    event.preventDefault()
    this.setState({
      errors: [],
      name: '',
      link: ''
    })
  }

  addNewEvent(submission){
    let causeId = this.props.params.id
    fetch(`/api/v1/causes/${causeId}/events`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(submission),
      headers: {
        'Content-Type': 'application/json',
        'Accept-Type': 'application/json'
      }
    })
    .then (response => {
      if (response.ok || response.status == 422) {
        return response
      } else {
        let errorMessage = `${response.status}`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.errors) {
        this.setState({
          errors: body.errors
        });
      } else {
        browserHistory.push(`/causes/${causeId}`)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  handleSubmit = (event) => {
    event.preventDefault()
    let formPayload = {
      name: this.state.name,
      link: this.state.link
    }
    this.addNewEvent(formPayload)
    .catch(error => console.error('Error', error))
  }


  handleName (event){
    this.setState({name: event.target.value})
  }

  handleLink (event){
    this.setState({link: event.target.value})
  }

  render() {
    let message = this.state.errors[0]
    return (
      <div>
        {message}
        <form style={{'text-align': "center"}} onSubmit={this.handleSubmit}>

          <TextField
            content={this.state.name}
            label="Name:"
            handleChange={this.handleName}
          />
          <TextField
            content={this.state.link}
            label="Link to Event:"
            handleChange={this.handleLink}
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={this.handleClearForm}>Clear</button>
            <input className="btn btn-primary" type="submit" value="Submit"  />
          </div>
        </form>
      </div>
    );
  }
}

export default AddEventContainer;
