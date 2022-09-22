import React from 'react';
import About from './About';
import Features from './Features';
import HowTo from './HowTo';
import Stats from './Stats';

const Steps = () => {
  return (
    <section id="about" className="s-about target-section">
        <Stats />

        <About />

        <HowTo />

        <Features />
    </section>
  )
}

export default Steps;