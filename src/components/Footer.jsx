import React from 'react'
import pay1 from '../img/payment/1.jpg';
import pay2 from '../img/payment/2.jpg';
import pay3 from '../img/payment/3.jpg';
import pay4 from '../img/payment/4.jpg';
import pay5 from '../img/payment/5.jpg';
import pay6 from '../img/payment/6.jpg';
import pay7 from '../img/payment/7.jpg';

import { Link } from 'react-router-dom';

const Footer = () => {

    const date = new Date();

    const year = date.getFullYear();

  return (
    
    <>
    

    <div className="sticky-btn">
    <a href="https://wa.link/v8a39x" target="_blank">
        <i class="fi fi-brands-whatsapp"></i>
        <div>
            <h4>Need Help ?</h4>
            <p>Click to chat live</p>
        </div>
    </a>
 </div>

    <div className="footer">

        <div className="footer-form">
            <h1>Don't Miss Out !</h1>
            <p>Subscribe to our newsletter. </p>
            <form id="newsletterForm">
                <input type="text" name="sub-email" placeholder="exampla@mail.com" required />
                <button><i className="fi fi-rr-paper-plane"></i></button>
            </form>

            <div className="social-icon">
                <ul>
                    <li><a href="/"><i className="fi fi-brands-facebook"></i></a></li>
                    <li><a href="/"><i className="fi fi-brands-instagram"></i></a></li>
                    <li><a href="/"><i className="fi fi-brands-twitter-alt-square"></i></a></li>
                    <li><a href="/"><i className="fi fi-brands-linkedin"></i></a></li>
                    <li><a href="/"><i className="fi fi-brands-youtube"></i></a></li>
                </ul>
            </div>


            <p>
                Google Rating: 4.9/ 5 based on many review at <a href="https://www.google.co.in/maps/place/Creative+Weblink+Solution/@28.7105166,77.1767673,17z/data=!3m1!4b1!4m7!3m6!1s0x390d021d93c9d995:0xe35eb062da53b57!8m2!3d28.7105166!4d77.178956!9m1!1b1?dcr=0" target="_blank">Google+</a>
            </p>

            <span>We Accept Online Payments</span>
            <div className="payment">
                <img src={pay1} alt="" /><img src={pay2} alt="" /><img src={pay3} alt="" /><img src={pay4} alt="" /><img src={pay5} alt="" /><img src={pay6} alt=""/><img src={pay7} alt="" />
            </div>

        </div>

        <div className="footer-menu">
            <ul>
                <li><a href="/">Information Technology</a></li>
                <li><a href="/">Website Designing</a></li>
                <li><a href="/">Logo Designing</a></li>
                <li><a href="/">Software Development</a></li>
                <li><a href="/">Flash Presentation</a></li>
                <li><a href="/">Domain Registration</a></li>
                <li><a href="/">Youtube Advertisement</a></li>
                <li><a href="/">Online Reputation Managment</a></li>
                <li><a href="/">Social Media Marketing</a></li>
            </ul>
        </div>

        <div className="footer-menu">
            <ul>
                <li><a href="/">SEO</a></li>
                <li><a href="/">PPC Managment</a></li>
                <li><a href="/">Mobile PPC</a></li>
                <li><a href="/">Google Shopping</a></li>
                <li><a href="/">Phone Call Tracking</a></li>
                <li><a href="/">Display Advertising</a></li>
                <li><a href="/">Real Time Bidding</a></li>
                <li><a href="/">Google Display Network</a></li>
                <li><a href="/">Remarketing</a></li>
            </ul>
        </div>

        <div className="footer-menu">
            <ul>
                <li><a href="/">Infographic Design</a></li>
                <li><a href="/">Wordpress</a></li>
                <li><a href="/">E-Commerce</a></li>
                <li><a href="/">Open Cart</a></li>
                <li><a href="/">Magento</a></li>
                <li><a href="/">WooCommerce</a></li>
                <li><a href="/">Website Maintenance</a></li>
                <li><a href="/">W3C Validation Services</a></li>
                <li><a href="/">Responsive Website</a></li>
            </ul>
        </div>

        <div className="footer-menu">
            <ul>
                <li><a href="/">Static Website</a></li>
                <li><a href="/">Dynamic Website</a></li>
                <li><a href="/">Internet Marketing</a></li>
                <li><a href="/">Web Development</a></li>
                <li><a href="/">PHP Development</a></li>
                <li><a href="/">Joomla</a></li>
                <li><a href="/">Email Campaign</a></li>
                <li><a href="/">Web Hosting</a></li>
            </ul>
        </div>


    </div>

    <footer>
        <p>
            &copy; Copyright 2010-{year} <Link to="/">Creative Weblink Solution</Link> All Rights Reserved
        </p>

        <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/portfolio">Web Portfolio</Link></li>
            <li><Link to="/logo-portfolio">Logo Portfolio</Link></li>
            <li><Link to="career">Career</Link></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Blog</a></li>
            <li><Link to="contact">Contact</Link></li>
            <li><a href="#">Payment</a></li>
        </ul>
    </footer>
    
    </>

  )
}

export default Footer