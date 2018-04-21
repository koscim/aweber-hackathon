import React from 'react';
import {Link} from 'react-router';

const CauseIndexTile = (props) => {
  return(
  <div>
    <Link to={`/causes/${props.id}`}>
      <img src={props.image_url} />
      <p>{props.name}</p>
    </Link>
  </div>
)}



export default CauseIndexTile;
