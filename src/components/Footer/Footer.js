import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiCoin } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/about">
              <h2></h2>
            </Link>
            <Link to="/"></Link>
          </div>
          <div className="footer-link-items">
            <Link to="/contact">
              <h2></h2>
            </Link>
            <Link to="/tools"></Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <BiCoin className="navbar-icon" />
              moeda-line
            </Link>
          </div>
          <small className="website-rights">MOEDA-LINE © 2021</small>
          <div className="social-icons">
            <Link className="social-icon-link" to="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link className="social-icon-link" to="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </Link>

            <Link className="social-icon-link" to="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
