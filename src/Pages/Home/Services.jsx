import React from 'react'
import webdesign from '../../img/services/web-design.png'
import logodesign from '../../img/services/logo-design.png'
import softdev from '../../img/services/soft-development.png'
import ecommerce from '../../img/services/ecommerce.png'
import webdev from '../../img/services/web-development.png'
import seo from '../../img/services/seo.png'
import webHosting from '../../img/services/web-hosting.png'
import email from '../../img/services/email-campaign.png'

const Services = () => {
  return (
   <>
   <div className="container">

<div className="row start">

    <div className="col col-4">
        <div className="service_card">
            <img src={webdesign} />
            <div className="service_info">
                <h1><a href="/">Website Designing</a></h1>
                <p>
                    Transforming concepts into captivating digital experiences. Our bespoke designs blend creativity with functionality to engage and inspire your online audience.
                </p>
                <a href="/" className="btn">
                    Read More <i className="fi fi-rr-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div className="col col-4">
        <div className="service_card">
            <img src={logodesign} />
            <div className="service_info">
                <h1><a href="/">Logo Designing</a></h1>
                <p>
                    Crafting unique visual identities that resonate with your brand's essence. Our logos capture attention, convey your message, and leave a lasting impression.
                </p>
                <a href="/" className="btn">
                    Read More <i className="fi fi-rr-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div className="col col-4">
        <div className="service_card">
            <img src={softdev} />
            <div className="service_info">
                <h1><a href="/">Software Development</a></h1>
                <p>
                    Building customized software solutions tailored to your specific needs. Our expert team ensures seamless development, integration, and support for optimal performance.
                </p>
                <a href="/" className="btn">
                    Read More <i className="fi fi-rr-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div className="col col-4">
        <div className="service_card">
            <img src={ecommerce} />
            <div className="service_info">
                <h1><a href="/">E-Commerce</a></h1>
                <p>
                    Empowering businesses to thrive in the digital marketplace. Our e-commerce solutions offer user-friendly interfaces, secure transactions, and scalable platforms for growth.
                </p>
                <a href="/" className="btn">
                    Read More <i className="fi fi-rr-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div className="col col-4">
        <div className="service_card">
            <img src={webdev} />
            <div className="service_info">
                <h1><a href="/">Web Development</a></h1>
                <p>
                    Crafting dynamic and responsive websites that elevate your online presence. From sleek designs to seamless functionality, we deliver tailored solutions for your digital success.
                </p>
                <a href="/" className="btn">
                    Read More <i className="fi fi-rr-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div className="col col-4">
        <div className="service_card">
            <img src={seo} />
            <div className="service_info">
                <h1><a href="/">Search Engine Optimization</a></h1>
                <p>
                    Enhancing your online visibility and driving organic traffic to your website. Our SEO strategies optimize content, keywords, and technical aspects for top search engine rankings.
                </p>
                <a href="/" className="btn">
                    Read More <i className="fi fi-rr-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div className="col col-4">
        <div className="service_card">
            <img src={webHosting} />
            <div className="service_info">
                <h1><a href="/">Web Hosting</a></h1>
                <p>
                    Providing reliable and secure hosting solutions to keep your website accessible 24/7. Our services ensure fast loading speeds, robust security, and seamless scalability for your online presence.
                </p>
                <a href="/" className="btn">
                    Read More <i className="fi fi-rr-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

    <div className="col col-4">
        <div className="service_card">
            <img src={email} />
            <div className="service_info">
                <h1><a href="/">Email Campaigning</a></h1>
                <p>
                    Unlocking the power of email marketing to engage your audience and drive conversions. Our tailored campaigns deliver targeted messaging, compelling content, and measurable results.
                </p>
                <a href="/" className="btn">
                    Read More <i className="fi fi-rr-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>

</div>

</div>
   </>
  )
}

export default Services