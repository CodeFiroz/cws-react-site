import React, { useState } from 'react';
import careerImg from '../../img/illustration/career.png';

const Career = () => {
    // State for form control
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        designation: 'Designation Applying for:', // Default value
        resume: '',
        msg: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <>
            <div className="page-header container">
                <h1>Career</h1>
                <ul>
                    <li><a href="index.html">Home /</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>

            <div className="container about-page">
                <div className="row">
                    <div className="col col-2">
                        <img src={careerImg} alt="Career" />
                    </div>
                    <div className="col col-2">
                        <h1>CAREER CREATIVE WEBLINK SOLUTION</h1>
                        <p>
                            Creative Weblink Solution offers you the freedom to be excellent; we're hiring smart, ambitious people who are too looking for a place to develop their career. If you are interested to be its part send your resume to our HR manager.
                        </p>
                        <p>
                            Career opportunities with Creative Weblink Solution for: Web/Graphic Designer, Web Developer, Programmer, Content Writer, Flash Designer, SEO (Search Engine Optimizer), Business Development/Marketing specialist etc.
                        </p>
                        <p>
                            We offer competitive salaries and benefits along with the pleasure, bravery, and expansion that comes from working with smart people in a rapidly growing market.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container contact-home">
                <div className="row item-start">
                    <div className="contact_form_div">
                        <h1>
                            Send your <br />
                            <span>RESUME</span> <br />
                            to our HR department:
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <select
                                name="designation"
                                id="designation"
                                value={formData.designation}
                                onChange={handleChange}
                            >
                                <option value="Designation Applying for:">Designation Applying for:</option>
                                <option value="Web Cum Graphic Designer">Web Cum Graphic Designer</option>
                                <option value="SEO Trainee">SEO Trainee</option>
                                <option value="PHP Developer">PHP Developer</option>
                                <option value="Other">Other</option>
                            </select>
                            <input
                                type="file"
                                name="resume"
                                placeholder="Resume"
                                title="Upload Your Resume"
                                required
                                onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                            />
                            <textarea
                                name="msg"
                                id="msg"
                                cols="30"
                                rows="4"
                                placeholder="Your Message"
                                value={formData.msg}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit">Send Request</button>
                        </form>
                    </div>

                    <div className="contact_form_info">
                        <div className="icon">
                            <i className="fi fi-rr-envelope"></i>
                        </div>
                        <h2>You may contact us with!</h2>
                        <p>
                            <i className="fi fi-rr-phone-call"></i>
                            +91-9958830621
                        </p>
                        <p>
                            <i className="fi fi-rr-envelope"></i>
                            job@cwsindia.co.in
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;
