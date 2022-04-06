import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [message, setMessage] = useState("");
  
  return (
    <footer>
      <div className="footer-content-container">
        <div className="footer-image-container">
          <img id="footer-logo" className="select-none" src='https://the-verve-seeds.s3.us-west-1.amazonaws.com/footer_logo.png' alt='footer logo' />
        </div>
        <div className="footer-column-container">
          <div className="one">
            <ul>
              <Link to="/collections/coffee/all-coffee" onClick={() => updateFilter("category", "all-coffee")}>
                <li>SHOP COFFEE</li>
              </Link>
              <Link to="/collections/gear/all-gear" onClick={() => updateFilter("category", "all-gear")}>
                <li>SHOP GEAR</li>
              </Link>
              <Link to="/login">
                <li>LOGIN</li>  
              </Link>
            </ul>
            <ul>
              <li><a href="https://www.vervecoffee.com/" target="_blank" rel="noopener noreferrer">REAL VERVE WEBSITE</a></li>
              <li><a href="https://angel.co/u/nick-pietrow" target="_blank" rel="noopener noreferrer">ABOUT THE CREATOR</a></li>
              <li><a href="mailto:njpietrow@gmail.com" target="_blank" rel="noopener noreferrer">CONTACT</a></li>
            </ul>

            {/* add space between footer contents */}
            <ul></ul>
          </div>
          <div className="two">
            <p>
              WE BELIEVE THE COFFEE EXPERIENCE IS OUR RESPONSIBILITY FROM SEED TO CUP. COFFEE IS OUR CRAFT, OUR RITUAL, OUR PASSION. IT DRIVES US AND INSPIRES US. WITH THIS SIMPLE TRUTH AND RESPONSIBILITY WE ARE BRIDGING THE GAP FROM FARMLEVEL TO STREETLEVEL.
              <br />
              <br />
              WE ARE VERVE. MADE IN SANTA CRUZ.
            </p>
            <p> 
              <a href="https://github.com/njpietrow/The-Verve" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="https://angel.co/u/nick-pietrow" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-angellist"></i></a>
              <a href="https://twitter.com/njpietrow" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
            </p>
          </div>
          <div className="three">
            <div>
              <p>
                BE THE FIRST TO KNOW! SUBSCRIBERS WILL RECEIVE FIRST ACCESS TO SPECIAL OFFERS AND LIMITED RELEASES.
              </p>
            </div>
            <div>
              <div>
                <input type="email" className="newsletter-email" placeholder="Enter your email here" />
                <br />
                <br />
                <button 
                  className="newsletter" 
                  onClick={() => {message === "" ? setMessage("Don't worry, I won't email you") : setMessage("")}}
                >Subscribe</button>
                <p>{message}&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="margin-spacer"></div>
        <div className="footer-address-blocks">
          <div className="block align-left">
            © Nick Pietrow 2022 <br />
            ALL RIGHTS RESERVED
          </div>
          <div className="block">
            The Verve <br />
            Los Angeles, CA
          </div>
          <div className="block align-right">
            <div className="space-header">
              &nbsp;
            </div>
            PROUDLY CRAFTED IN <br /> LOS ANGELES, CA
          </div>
        </div>  
      </div>
    </footer>
  )
};

export default Footer;