import React from 'react';
import ContactForm from '../Components/ContactForm';
import Scroll from '../Components/Scroll';

const ContactPage = () => {
    return (
        <div className="ContactPage">
            <Scroll>
                <ContactForm />
            </Scroll>

        </div>
    )
}

export default ContactPage;