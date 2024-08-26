import React, { useState, useEffect, useRef } from 'react';
import logo from './../img/cws-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuIconRef = useRef(null);
  const closeIconRef = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const closeIcon = closeIconRef.current;
    const sidebar = sidebarRef.current;
    const overlay = overlayRef.current;

    const openSidebar = () => {
      sidebar.classList.add('active');
      overlay.classList.add('active');
    };

    const closeSidebar = () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      setOpenDropdown(null); // Close any open dropdown when closing sidebar
    };

    menuIcon.addEventListener('click', openSidebar);
    closeIcon.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    return () => {
      menuIcon.removeEventListener('click', openSidebar);
      closeIcon.removeEventListener('click', closeSidebar);
      overlay.removeEventListener('click', closeSidebar);
    };
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      <div id="overlay" ref={overlayRef}></div>

      <div className="top-bar">
        <ul className="top-contact">
          <li>
            <a href="mailto:info@cwsindia.co.in">
              <i className="bx bxs-envelope"></i>
              info@cwsindia.co.in
            </a>
          </li>
          <li>
            <a href="tel:9958830621">
              <i className="bx bxs-phone"></i>
              +91-9958830621
            </a>
          </li>
        </ul>

        <ul className="top-bar-social">
          <p>follow us on :</p>
          <li><a href="#"><i className="bx bxl-facebook-circle"></i></a></li>
          <li><a href="#"><i className="bx bxl-instagram-alt"></i></a></li>
          <li><a href="#"><i className="bx bxl-whatsapp-square"></i></a></li>
          <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
          <li><a href="#"><i className="bx bxl-linkedin-square"></i></a></li>
        </ul>
      </div>

      <div className="site-header">
        <Link to="/" className="logo">
          <img src={logo} alt="CWS Logo" />
        </Link>

        <nav>
          <ul className="menu-navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li className="drop-menu">
              <a href="/">Our Services</a>
              <ul className="dropdown">
                <li><a href="/">Website Designing</a></li>
                <li><a href="/">Logo Designing</a></li>
                <li><a href="/">Graphics Design</a></li>
                <li><a href="/">E-Brochure Design</a></li>
                <li><a href="/">Soft. Development</a></li>
                <li><a href="/">Email Campaigning</a></li>
                <li><a href="/">Web Development</a></li>
                <li><a href="/">Web Hosting</a></li>
                <li><a href="/">Domain Registration</a></li>
                <li><a href="/">SEO</a></li>
                <li><a href="/">PPC Management</a></li>
              </ul>
            </li>
            <li className="drop-menu">
              <a href="/">Portfolio</a>
              <ul className="dropdown">
                <li><Link to="/portfolio">Web Portfolio</Link></li>
                <li><Link to="/logo-portfolio">Logo Portfolio</Link></li>
              </ul>
            </li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div className="mobile-menu">
        <div className="mobile-menu-icon" ref={menuIconRef}>
          <i className="fi fi-rr-menu-burger"></i>
        </div>

        <Link to="/" className="mobile-logo">
          <img src={logo} alt="CWS Logo" />
        </Link>

        <div className="mobile-contact">
          <a href="https:/wa.me/919958830621" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="mobile-sidebar" ref={sidebarRef}>
        <div className="sidebar-content">
          <i className="fi fi-rr-cross" ref={closeIconRef}></i>

          <div className="site-title">
            <h2>Creative Weblink Solution</h2>
            <p>Your business digital partner</p>
          </div>

          <ul className="mobile-navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li>
              <a href="#" onClick={() => toggleDropdown(0)}>
                Our Services <i className="fi fi-rr-play"></i>
              </a>
              <ul style={{ display: openDropdown === 0 ? 'block' : 'none' }}>
                <li><a href="/">Website Designing</a></li>
                <li><a href="/">Logo Designing</a></li>
                <li><a href="/">Graphics Design</a></li>
                <li><a href="/">E-Brochure Design</a></li>
                <li><a href="/">Soft. Development</a></li>
                <li><a href="/">Email Campaigning</a></li>
                <li><a href="/">Web Development</a></li>
                <li><a href="/">Web Hosting</a></li>
                <li><a href="/">Domain Registration</a></li>
                <li><a href="/">SEO</a></li>
                <li><a href="/">PPC Management</a></li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown(1)}>
                Portfolio <i className="fi fi-rr-play"></i>
              </a>
              <ul style={{ display: openDropdown === 1 ? 'block' : 'none' }}>
                <li><Link to="/portfolio">Web Portfolio</Link></li>
                <li><Link to="/logo-portfolio">Logo Portfolio</Link></li>
              </ul>
            </li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
