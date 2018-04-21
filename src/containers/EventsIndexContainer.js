import React, { Component } from 'react';
import EventTile from '../components/EventTile';

class EventsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.setState({
      events: [
        {
          id: 1,
          name: 'Event 1',
          feedUrl: 'event1.com',
          imgUrl: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi'
        },
        {
          id: 2,
          name: 'Event 2',
          feedUrl: 'event2.com',
          imgUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg'
        },
        {
          id: 3,
          name: 'Event 3',
          feedUrl: 'event3.com',
          imgUrl: 'http://luisjimenez.com/wp-content/uploads/2017/05/dog-1.jpg'
        }
      ]
    })
  }

  // componentWillMount() {
  //   fetch(`api/v1/causes/${causeId}/articles`)
  // }

  render() {
    let active;
    let count = 0;
    let events = this.state.events.map(event => {
      if(count < 1) {
        active = 'active';
      } else {
        active = '';
      }
      count += 1;
      return (
        <EventTile
          key={event.id}
          id={event.id}
          name={event.name}
          feedUrl={event.feedUrl}
          imgUrl={event.imgUrl}
          active={active}
        />
      )
    })
    return (
      <div className='jumbotron'>
        <div id='carouselControls' className='carousel slide' data-ride='carousel'>
          <div className='carousel-inner'>
            <h2>Events</h2>
            {events}
          </div>
          <a className='carousel-control-prev' href='#carouselControls' role='button' data-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          </a>
          <a className='carousel-control-next' href='#carouselControls' role='button' data-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
          </a>
        </div>
      </div>
    )
  }
}

export default EventsIndexContainer;
