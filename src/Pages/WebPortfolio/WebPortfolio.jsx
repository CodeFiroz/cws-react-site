import React from 'react'
import portfolios from './Portfolio';

const WebPortfolio = () => {
  return (
    <>
    
<div className="page-header container">
    <h1>Web <span>Portfolio</span></h1>
    <ul>
        <li><a href="index.html">Home /</a></li>
        <li><a href="web-portfolio.html">Web Portfolio</a></li>
    </ul>
</div>


<div class="container">

    <div class="row start">

    {portfolios.map((portfolio, index) => (
           
       <>
       <div class="col col-4">
        <div class="portfolio_card">
            <a href={portfolio.Url} target="_blank">
                <img src={portfolio.Image} alt={portfolio.title} />
            </a>
            <div class="portfolio-info">
                <h4><a href={portfolio.Url} target="_blank">
                    {portfolio.title}
                </a></h4>
                <a href={portfolio.Url} target="_blank" class="btn">Check Out Site <i class="fi fi-rr-arrow-up-right"></i></a>
            </div>
        </div>
       </div>
       </>
           
                     ))}

</div>
</div>
    
    </>
  )
}

export default WebPortfolio