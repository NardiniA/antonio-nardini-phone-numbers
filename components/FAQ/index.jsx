import React from 'react';
import clsx from 'clsx';
import { SectionHeader } from '../Layout';
import Answer from './Answer';

const faq_data = {
    header: {
        title: "Got any questions about us? Find the answers below.",
    },
    questions: [
        {
            question: "This is a question?",
            answer: "Pellentesque posuere. Etiam rhoncus. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.",
        },
        {
            question: "This is a question?",
            answer: "Aliquam erat volutpat. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Pellentesque dapibus hendrerit tortor.",
        },
        {
            question: "This is a question?",
            answer: "In hac habitasse platea dictumst. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Phasellus volutpat, metus eget.",
        },
        {
            question: "This is a question?",
            answer: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. Vivamus in erat ut urna cursus vestibulum.",
        },
    ],
    lightBackground: false
};

const FAQ = () => {
    const half = Math.ceil(faq_data?.questions.length / 2);
    const left_col = faq_data?.questions.slice(0, half);
    const right_col = faq_data?.questions.slice(half);
  return (
    <section id="faq" className={clsx("s-section", faq_data.lightBackground && "bg-light")}>
        <SectionHeader header={faq_data?.header} />
        
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