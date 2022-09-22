import React from 'react';
import { SectionHeader } from '@/components/Layout';
import Slider from '@/components/About/Slider';

const About = ({ step, number }) => {
  return (
    <div className="s-about__info">
        <SectionHeader header={{
          title: step.title,
          description: step.description
        }} number={number} />

        <Slider slider={step?.slider} />
    </div>
  )
}

export default About;