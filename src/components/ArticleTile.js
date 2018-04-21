import React from 'react';

const ArticleTile = props => {
  return (
    <div className={`carousel-item ${props.active}`}>
      <img className="d-block w-100" src={`${props.imgUrl}`} style={{height: '400px'}}/>
      <div className="d-block w-100">
        {props.name}
        {props.feedUrl}
      </div>
    </div>
  )
}

export default ArticleTile;
