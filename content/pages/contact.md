---
metaTitle: Contact Us | Antonio Nardini Phone Directory
metaDescription: Contact us if you have had a problem with our website or just a general
  enquiry.
sections:
- template: banner
  title: Contact Us
  description: ''
  bg: ''
- template: contact
  form:
    action: https://airform.io/contact@antonionardini.com
    method: POST
    fields:
    - template: input
      type: text
      config:
        required:
          value: true
          message: This field is required.
        minLength:
          message: Value is too short.
          value: '1'
        maxLength:
          message: Value is too long.
          value: '255'
        min:
          message: Value is too low.
          value: 
        max:
          message: Value is too big.
          value: 
        size: half
      name: Name
      label: Your Name
      placeholder: John Doe
    - template: input
      type: email
      config:
        required:
          value: true
          message: This field is required.
        minLength:
          message: Value is too short.
          value: 
        maxLength:
          message: Value is too long.
          value: 
        min:
          message: Value is too low.
          value: 
        max:
          message: Value is too big.
          value: 
        size: half
      name: Email
      label: Your Email
      placeholder: example@mail.com
    - template: select
      config:
        required:
          value: true
          message: This field is required.
        size: full
      name: Reason
      label: Your Reason for contacting?
      placeholder: Your Reason?
      options:
      - Questions
      - Issues
      - Other
    - template: textarea
      config:
        required:
          value: true
          message: This field is required.
        minLength:
          message: Value is too short.
          value: 
        maxLength:
          message: Value is too long.
          value: 
        size: full
      name: Message
      label: Message
      placeholder: Ask us a question here...
  title: Contact Form
  description: Drop us a line at <a href="mailto:contact@antonionardini" title="Email
    Us" target="_blank">contact@antonionardini.com</a><br>Or call us at <a href=""
    title="" target="_blank">07566 123456</a>

---
