import React from 'react';


const ContactForm = () => {
    return (
      <div className="formcontainer">
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact"/>
        <h3 className="contactHeader">Get in touch</h3>    
        <input type="text" name="name" placeholder="Full Name" required />< br/>
        <input type="email" name="email" required placeholder="E-mail"/>< br/>
        <textarea name="message" required placeholder="Message"/>< br/>
        <button type="submit">Send</button>
      </form>
    </div>
    );
  };
  
  export default ContactForm;