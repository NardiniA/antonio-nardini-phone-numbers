import dynamic from 'next/dynamic';
import React from 'react';
import { capitalise } from '@/libs/capitalise';

const Steps = ({ section }) => {
  let counter = 0;
  return (
    <section id="about" className="s-about target-section">
        {section?.steps && section?.steps.map((step, index) => {
          const number = (step?.title || step?.description) ? counter += 1 : null;
          const Comp = dynamic(() => import(`./${capitalise(step.template)}`));
          return <Comp step={step} number={number} key={step.template + "steps_section_key" + index} />
        })}
    </section>
  )
}

export default Steps;