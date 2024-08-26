import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    city: '',
    msg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <div className="page-header container">
        <h1>Contact</h1>
        <ul>
          <li><a href="index.html">Home /</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="container contact-bg">
        <div className="row">
          <div className="col col-3">
            <div className="contactInfo">
              <h3>Corporate Office</h3>
              <p>
                308, 1st Floor, Sector A6, Pocket-7, Narela, Delhi 110040
              </p>
              <i className="fi fi-rr-marker"></i>
            </div>
          </div>

          <div className="col col-3">
            <div className="contactInfo">
              <h3>Email Address</h3>
              <p>
                info@cwsindia.co.in, job@cwsindia.co.in
              </p>
              <i className="fi fi-rr-at"></i>
            </div>
          </div>

          <div className="col col-3">
            <div className="contactInfo">
              <h3>Phone Number</h3>
              <p>
                +91-9958830621
              </p>
              <i className="fi fi-rr-phone-call"></i>
            </div>
          </div>
        </div>

        <div className="row item-stretch">
          <div className="contactForm">
            <h1>CONTACT FORM</h1>
            <p>
              Kindly contact us feel free to discuss Web Design Graphic Design or any Digital Marketing requirement.
            </p>

            <form onSubmit={handleSubmit} className="row ai-start">
              <div className="col-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="col-2">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="col-2">
                <select
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="" disabled>Choose City</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Orissa">Orissa</option>
                  <option value="Pondicherry">Pondicherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttaranchal">Uttaranchal</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>

              <div className="col-1">
                <textarea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="5"
                  placeholder="Tell us about your enquiry*"
                  value={formData.msg}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>

          <div className="contactMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27956.285104494476!2d77.098088!3d28.852682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d021d93c9d995%3A0xe35eb062da53b57!2sCreative%20Weblink%20Solution!5e0!3m2!1sen!2sin!4v1711956674637!5m2!1sen!2sin"
              width="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
