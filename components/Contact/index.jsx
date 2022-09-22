import React from 'react';
import Form from '../Form';
import { SectionHeader } from '../Layout';

const contact_data = {
    header: {
        title: "Contact Us",
        description:
            'Drop us a line at <a href="mailto:contact@antonionardini">contact@antonionardini.com</a> <br /> Or call us at <a href="tel:07566123456">07566 123456</a>',
    },
    form: {
        fields: [
            {
                template: "input",
                name: "Name",
                label: "Your Name",
                type: "text",
                placeholder: "John Doe",
                config: {
                    required: {
                        value: true,
                        message: "This field is required.",
                    },
                    minLength: {
                        value: 1,
                        message: "Not enough characters.",
                    },
                    maxLength: {
                        value: 255,
                        message: "Too many characters.",
                    },
                    min: {
                        value: null,
                        message: "Value is too small.",
                    },
                    max: {
                        value: null,
                        message: "Value is too big.",
                    },
                    pattern: {
                        value: null,
                        message: "Invalid characters",
                    },
                },
                size: "6",
            },
            {
                template: "input",
                name: "Email",
                label: "Your Email",
                type: "email",
                placeholder: "test@email.com",
                config: {
                    required: {
                        value: true,
                        message: "This field is required.",
                    },
                    minLength: {
                        value: 1,
                        message: "Not enough characters.",
                    },
                    maxLength: {
                        value: 255,
                        message: "Too many characters.",
                    },
                    min: {
                        value: null,
                        message: "Value is too small.",
                    },
                    max: {
                        value: null,
                        message: "Value is too big.",
                    },
                    pattern: {
                        value: null,
                        message: "Invalid characters",
                    },
                },
                size: "6",
            },
            {
                template: "select",
                name: "Reason",
                label: "Your Reason for contacting?",
                placeholder: "test@email.com",
                options: ["Questions", "Reports", "Other"],
                config: {
                    required: {
                        value: true,
                        message: "This field is required.",
                    },
                    min: {
                        value: null,
                        message: "Value is too small.",
                    },
                    max: {
                        value: null,
                        message: "Value is too big.",
                    },
                },
                size: "12",
            },
            {
                template: "textarea",
                name: "Message",
                label: "Your Message",
                placeholder: "Ask us a question here...",
                config: {
                    required: {
                        value: true,
                        message: "This field is required.",
                    },
                    minLength: {
                        value: null,
                        message: "Value is too small.",
                    },
                    maxLength: {
                        value: null,
                        message: "Value is too big.",
                    },
                },
                size: "12",
            },
        ],
    },
};

const Contact = () => {
  return (
    <section id="contact" className="s-section">
        <SectionHeader header={contact_data?.header} />

        <div className="row">
            <Form form={contact_data?.form} />
        </div>
    </section>
  )
}

export default Contact;