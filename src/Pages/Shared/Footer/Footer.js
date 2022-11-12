import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className=" p-10 "
      style={{
        background: `url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/">Branding</Link>
          <Link to="/">Design</Link>
          <Link to="/">Marketing</Link>
          <Link to="/">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/">About us</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Jobs</Link>
          <Link to="/">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/">Terms of use</Link>
          <Link to="/">Privacy policy</Link>
          <Link to="/">Cookie policy</Link>
        </div>
      </div>
      <div className="pt-8 text-sm text-center ">
        <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
