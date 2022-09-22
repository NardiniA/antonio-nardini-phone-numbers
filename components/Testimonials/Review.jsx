import React from 'react';

const Review = ({ review: { image, name, position, text } }) => {
  return (
      <div className="s-testimonials__slide">
          <div className="s-testimonials__author">
              <img
                  src={image}
                  alt={name}
                  className="s-testimonials__avatar"
              />
              <cite className="s-testimonials__cite">
                  <strong>{name}</strong>
                  <span>{position}</span>
              </cite>
          </div>

          <p dangerouslySetInnerHTML={{ 
            __html: text
          }} />
      </div>
  );
}

export default Review;