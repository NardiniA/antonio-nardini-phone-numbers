import React from 'react';
import Form from '../Form';
import { SectionHeader } from '../Layout';

const Contact = ({ section }) => {
  return (
    <section id="contact" className="s-section">
        <SectionHeader header={{
            title: section.title,
            description: section.description
        }} />

        <div className="row">
            <Form form={section?.form} />
        </div>
    </section>
  )
}

export default Contact;