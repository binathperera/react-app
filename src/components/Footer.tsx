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
            <Button
              buttonStyle="btn btn-primary"
              type="submit"
              url="/react-app"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/react-app">Testimonials</Link>
            <Link to="/react-app">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/react-app">Contact</Link>
            <Link to="/react-app">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Projects</h2>
            <Link to="/react-app">Media</Link>
            <Link to="/react-app">Ambassadors</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/react-app">Instagram</Link>
            <Link to="/react-app">Facebook</Link>
            <Link to="/react-app">Youtube</Link>
            <Link to="/react-app">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/react-app" className="footer-logo">
              <img src="images/ecsc-navbar-logo.png" />
            </Link>
          </div>
          <small className="website-rights">
            ECSC University of Kelaniya © 2024
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/react-app"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/react-app"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/react-app"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/react-app"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/react-app"
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
