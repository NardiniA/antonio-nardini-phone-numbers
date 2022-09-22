import React from 'react';

const Item = ({ stat: { title, count } }) => {
  return (
      <div className="column s-about__stats-item">
          <div className="s-about__stats-count">{count}</div>
          <h5>{title}</h5>
      </div>
  );
}

export default Item;