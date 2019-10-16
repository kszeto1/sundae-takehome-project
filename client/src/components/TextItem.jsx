import React from 'react';

const TextItem = (props) => {
  return (
    <div className="text-item">
      <h3>{props.title}</h3>
      <div className="description">
        {props.desc}
      </div>
    </div>
  )
}

export default TextItem;