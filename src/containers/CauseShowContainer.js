import React, { Component } from 'react';
import ArticlesIndexContainer from './ArticlesIndexContainer';
import EventsIndexContainer from './EventsIndexContainer';


class CauseShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cause: "",
      events: [],
      articles: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:9000/api/v1/causes/${this.props.params.id}`, {
      credentials: 'same-origin'
    })
    .then (response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let cause = body.cause
      let events = body.events
      let articles = body.articles
      this.setState({
        cause: cause,
        events: events,
        articles: articles
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div>
        {this.state.cause.details}
        <ArticlesIndexContainer
          articles = {this.state.articles}
        />
        <EventsIndexContainer
          events = {this.state.events}
        />
      </div>
    )
  }
}

export default CauseShowContainer;
