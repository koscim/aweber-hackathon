import React, { Component } from 'react';
import CauseIndexTile from '../components/CauseIndexTile';

class CauseIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      causes: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:9000/api/v1/causes`, {
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
      this.setState({causes: body})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    console.log(this.state)
    let causes = this.state.causes.map(cause => {
      return(
        <CauseIndexTile
          key = {cause.name}
          id = {cause.id}
          name = {cause.name}
        />
      )
    })

    return (
      <div className="container">
        <div className="row">
        {causes}
        </div>
      </div>
    )
  }
}

export default CauseIndexContainer;
