import React from 'react';
import { SectionHeader } from '@/components/Layout';
import Slider from './Slider';
import clsx from 'clsx';

const About = ({ section }) => {
  return (
    <section id="about" className={clsx("s-section", section.lightBackground && "bg-light")}>
      <div>
          <SectionHeader header={{
            title: section.title,
            description: section.description
          }} />

          <Slider slider={section?.slider} />
      </div>
    </section>
  );
}

export default About