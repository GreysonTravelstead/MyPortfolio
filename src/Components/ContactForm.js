import React from 'react';


const ContactForm = () => {
    return (
      <div className="formcontainer">
      <form type="hidden" name="contact" method="POST">
      <input type="hidden" name="contact" value="FormAccessNetlify" />
        <h3 className="contactHeader">Get in touch</h3>    
        <input type="text" name="name" placeholder="Full Name" required />< br/>
        <input type="email" name="email" required placeholder="E-mail"/>< br/>
        <textarea name="message" required placeholder="Message"/>< br/>
        <button type="submit" name="SendMessage">Send</button>
      </form>
    </div>
    );
  };
  
  export default ContactForm;