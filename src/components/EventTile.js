import React from 'react';

const EventTile = props => {
  return (
    <div className={`carousel-item ${props.active}`}>
      <img className="d-block" src={`${props.imgUrl}`} style={{height: '200px', margin: '0 auto'}}/>
      <div className="d-block">
        <h3>{props.name}</h3>
        <h4>{props.feedUrl}</h4>
      </div>
    </div>
  )
}

export default EventTile;
