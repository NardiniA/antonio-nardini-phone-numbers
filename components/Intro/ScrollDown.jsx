import React from 'react';

const ScrollDown = () => {
  return (
      <div className="s-intro__scroll">
          <a href="#about" className="smoothscroll">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ transform: "rotate(270deg)" }}
              >
                  <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
              </svg>
              <span className="u-screen-reader-text">Scroll</span>
          </a>
      </div>
  );
}

export default ScrollDown;