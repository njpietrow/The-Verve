import React from "react";

const Footer = () => (
  <footer>
    <div className="footer-content-container">
      <div className="footer-image-container">
        <img id="footer-logo" className="select-none" src='https://the-verve-seeds.s3.us-west-1.amazonaws.com/footer_logo.png' alt='footer logo' />
      </div>
      <div className="footer-column-container">
        <div className="one">
          <ul>
            <li>SHOP COFFEE</li>
            <li>SUBSCRIBE</li>
            <li>GET $5</li>
            <li>STORY</li>
            <li>FARMLEVEL</li>
          </ul>
          <ul>
            <li>JOBS</li>
            <li>LOGIN</li>
            <li>CONTACT</li>
          </ul>
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
            <a href="https://github.com/njpietrow/The-Verve"><i className="fa-brands fa-github"></i></a>
            <a href="https://angel.co/u/nick-pietrow"><i className="fa-brands fa-angellist"></i></a>
            <a href="https://twitter.com/njpietrow"><i className="fa-brands fa-twitter"></i></a>
          </p>
        </div>
        <div className="three">
          <div>
            <p>
              BE THE FIRST TO KNOW! SUBSCRIBERS WILL RECEIVE FIRST ACCESS TO SPECIAL OFFERS AND LIMITED RELEASES.
            </p>
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
          PROUDLY CRAFTED IN LOS ANGELES, CA
        </div>
      </div>  
    </div>
  </footer>
);

export default Footer;