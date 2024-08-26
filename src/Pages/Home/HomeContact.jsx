import React from 'react';

const HomeContact = () => {
    return (
        <div className="container contact-home">
            <div className="row item-start">
                <div className="contact_form_div">
                    <h1>
                        Let's Build <br />
                        something <br />
                        <span>great together.</span>
                    </h1>
                    <form action="#">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Email Address" required />
                        <input type="tel" name="phone" placeholder="Phone Number" required />
                        <input type="text" name="subject" placeholder="Subject" required />
                        <textarea name="msg" id="msg" cols="30" rows="4" placeholder="Your Message"></textarea>
                        <button type="submit">Submit Message</button>
                    </form>
                </div>

                <div className="contact_form_info">
                    <div className="icon">
                        <i className="fi fi-rr-envelope"></i>
                    </div>
                    <h2>Get In Touch With us!</h2>

                    <p>
                        <i className="fi fi-rr-marker"></i>
                        308, 1st Floor, SectorA6, Pocket-7, Narela, Delhi 110040
                    </p>

                    <p>
                        <i className="fi fi-rr-phone-call"></i>
                        +91-9958830621
                    </p>

                    <p>
                        <i className="fi fi-rr-envelope"></i>
                        info@cwsindia.co.in, job@cwsindia.co.in
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;
