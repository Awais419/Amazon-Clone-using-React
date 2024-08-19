import React from 'react';
import './Card.css';

function Card({ title, items }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-items">
        {items.map((item, index) => (
          <div key={index} className="card-item">
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
