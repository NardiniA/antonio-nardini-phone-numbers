import React from 'react';
import clsx from 'clsx';
import { SectionHeader } from '../Layout';
import Answer from './Answer';

const FAQ = ({ section }) => {
    const half = Math.ceil(section?.questions.length / 2);
    const left_col = section?.questions.slice(0, half);
    const right_col = section?.questions.slice(half);
  return (
    <section id="faq" className={clsx("s-section", section.lightBackground && "bg-light")}>
        <SectionHeader header={{
            title: section.title,
            description: section.description
        }} />
        
        <div className="row">
            {left_col && (
                <div className="column lg-6 stack-on-900 question-container">
                    {left_col.map((q, index) => (
                        <Answer data={q} key={q.question + "faq_key" + index} />
                    ))}
                </div>
            )}
            {right_col && (
                <div className="column lg-6 stack-on-900 question-container">
                    {right_col.map((q, index) => (
                        <Answer data={q} key={q.question + "faq_key" + index} />
                    ))}
                </div>
            )}
        </div>
    </section>
  )
}

export default FAQ