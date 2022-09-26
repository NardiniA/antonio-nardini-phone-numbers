---
metaTitle: Contact | Phone Number Directory - Antonio Nardini
metaDescription: If you have any problems or issues, feel free to contact us.
sections:
- template: banner
  title: Contact Us
  description: For any problems or issues, feel free to contact us.
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
      name: Name
      label: Your Name
      placeholder: John Smith
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
      label: Email Address
      placeholder: john@example.com
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
  description: ''

---
