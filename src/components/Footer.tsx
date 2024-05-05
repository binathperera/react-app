import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe to our newsletter
        </p>
        <p className="footer-subscription-text">
          The latest news, articles and resources will be sent to your inbox
          weekly
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn btn-primary" type="submit" url="/home">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/home">Testimonials</Link>
            <Link to="/home">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/home">Contact</Link>
            <Link to="/home">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Projects</h2>
            <Link to="/home">Media</Link>
            <Link to="/home">Ambassadors</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/home">Instagram</Link>
            <Link to="/home">Facebook</Link>
            <Link to="/home">Youtube</Link>
            <Link to="/home">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/home" className="footer-logo">
              <img src="images/ecsc-navbar-logo.png" />
            </Link>
          </div>
          <small className="website-rights">
            ECSC University of Kelaniya © 2024
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/home"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/home"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/home"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/home"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/home"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
