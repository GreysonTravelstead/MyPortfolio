import React from 'react';
import {useState} from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit}>
        <h3 className="contactHeader">Get in touch</h3>    
        <input type="text" id="name" placeholder="Full Name" required />< br/>
        <input type="email" id="email" required placeholder="E-mail"/>< br/>
        <textarea id="message" required placeholder="Message"/>< br/>
        <button type="submit">{status}</button>
      </form>
    </div>
    );
  };
  
  export default ContactForm;