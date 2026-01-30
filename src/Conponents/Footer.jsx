// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">CareerPath</h1>
          <p className="text-gray-300">
            Your trusted platform for career guidance, personalized advice, and resources to shape your professional future.
          </p>
          <div className="flex gap-4 text-white text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400">Services</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-400">Blog</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/career-tests" className="hover:text-blue-400">Career Tests</Link>
            </li>
            <li>
              <Link to="/guides" className="hover:text-blue-400">Guides & Tips</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-400">FAQ</Link>
            </li>
            <li>
              <Link to="/webinars" className="hover:text-blue-400">Webinars</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300">123 Career St., Dhaka, Bangladesh</p>
          <p className="text-gray-300 mt-2">Email: info@careerpath.com</p>
          <p className="text-gray-300 mt-2">Phone: +880 123 456 789</p>
          <Link to="/contact" className="btn btn-outline btn-sm mt-4 text-white border-white hover:bg-white hover:text-blue-900">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} CareerPath. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
