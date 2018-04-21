import React from 'react';

const TextField = props => {
  return (
    <div className="form-group">
      <label>
        <h4>{props.label}</h4>
        <input
          name={props.name}
          onChange={props.handlerFunction}
          type="text"
          value={props.content}
        />
      </label>
    </div>
  )
}

export default TextField;
