import React from 'react'
import aboutImg from '../../img/illustration/about.png'

const About = () => {
  return (
    <>
    <div className="page-header container">
    <h1>About <span>CWS</span></h1>
    <ul>
        <li><a href="index.html">Home /</a></li>
        <li><a href="about-us.html">About us</a></li>
    </ul>
</div>


<div className="container about-page">

    <h1>WELCOME TO CREATIVE WEBLINK SOLUTION
    </h1>

    <div className="row">

        <div className="col col-2">
            <p>
                Creative Weblink Solution is a complete web solutions company providing multi­dimensional web services like website design & development, website promotion, domain registration, logo designing, bulk sms, Flash representation, web hosting and email campaigning in Delhi NCR and through out india.Our solutions will add value to their Web­front, Back­end Solutions, and all their electronic resources and enhance automation to their entire business operations.
            </p>

            <p>
                We are generally known as customize website builder. we are commited to provide Excellent service to our valued customer.
            </p>

            <p>
                We provide outstanding customer service. We have served so many individuals and corporate from different industries in the field of website design and web development.Our website designs are visually attractive with good typefaces, easy navigation, fully accessible, best legibility, best graphics, fully cross platform compatible, type style consistency, clean with easy­to­use and powerful web interface designs.
            </p>

            
        </div>

        <div className="col col-2">
            <img src={aboutImg} alt="" />
            
        </div>

    </div>

    <h4>Who we are</h4>
    <p>
        Creative Weblink Solution is a Web Design Company in Delhi, India We have served various corporates and small business enterprises for their Web Design and Search Engine Optimization Services. We offer most cost effective with quality Web Design Services in Delhi and through out India, UK, USA, Singapore and Australia. We too work for Web Design Companies from USA who outsource their jobs to us and we work for them from Delhi. The team at Creative Weblink Solution experienced, combined, in web design and identity development. Our unique life stories bring an open-minded approach to your business, whatever your location. We’ve helped countless businesses from around the globe start their businesses online. We would love to help yours. Contact us any time to see how we can be of service.


    </p>


    <div className="row">

        <div className="col col-2">
           <div className="about-box">
            <h4>Why choose us</h4>
            <p>
                Are you looking for the most affordable, creative and reliable professional website design company available?, Yes, Creative Weblink Solution is best service provider and have developed websites in various Industry.
            </p>
           </div>
        </div>

        <div className="col col-2">
          <div className="about-box">
            <h4>Our expertise</h4>
            <p>
                Are you looking for the most affordable, creative and reliable professional website design company available?, Yes, Creative Weblink Soltuion is best service provider and have developed websites in various Industry.
            </p>
          </div>
        </div>

    </div>

</div>

    </>
  )
}

export default About