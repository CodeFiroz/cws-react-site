import React from 'react'

import { 
  aaditya,
  ashv,
  blueBird,
  daulat,
  drs,
  engineering,
  ftg,
  gardich,
  gs,
  honeySause,
  iala,
  ifs,
  jyot,
  kingfisher,
  lezora,
  mandirMart,
  matrix,
  natureValley,
  pm,
  prnb,
  rajShree,
  remycler,
  salvage,
  smc,
  star,
  sunKid,
  velocity,
  velocity2,
  voltCare,
  vrinda,
  wheelzter 
} from './Logos';


const LogoPortfolio = () => {

  const images = [
    aaditya,
    ashv,
    blueBird,
    daulat,
    drs,
    engineering,
    ftg,
    gardich,
    gs,
    honeySause,
    iala,
    ifs,
    jyot,
    kingfisher,
    lezora,
    mandirMart,
    matrix,
    natureValley,
    pm,
    prnb,
    rajShree,
    remycler,
    salvage,
    smc,
    star,
    sunKid,
    velocity,
    velocity2,
    voltCare,
    vrinda,
    wheelzter
  ];

  return (

    <>
      <div className="page-header container">
        <h1>Logo <span>Portfolio</span></h1>
        <ul>
          <li><a href="index.html">Home /</a></li>
          <li><a href="web-portfolio.html">Web Portfolio</a></li>
        </ul>
      </div>

      <div className="container">
        <div className="row">


{images.map((image, index) => (
           
<div className="col-6">
<div className="logo-portfolio">
    <img src={image} alt={`Logo ${index}`} />
</div>
</div>

          ))}

     





        </div>

      </div>
    </>


  )
}

export default LogoPortfolio