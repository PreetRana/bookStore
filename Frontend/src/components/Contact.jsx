import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Contact Us</h1>
        <p className="text-gray-700 md:w-3/4 mx-auto">
          We’re always happy to hear from our readers! Whether you want to visit
          us, call, or send an email — here’s how you can reach our bookstore.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Details */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-pink-500">Get in Touch</h2>
          <p>
            <span className="font-semibold">📍 Address:</span><br />
            BookVerse Bookstore, <br />
            123 Book Street, Novel City, India - 110045
          </p>
          <p>
            <span className="font-semibold">📞 Phone:</span><br />
            +91 98765 43210
          </p>
          <p>
            <span className="font-semibold">✉️ Email:</span><br />
            contact@bookverse.com
          </p>
          <p>
            <span className="font-semibold">🕒 Working Hours:</span><br />
            Monday - Saturday: 9:00 AM to 8:00 PM <br />
            Sunday: 10:00 AM to 6:00 PM
          </p>

          <div className="flex gap-5 mt-6">
            <a
              href="#"
              className="text-pink-600 hover:text-pink-800 text-xl"
              title="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-pink-600 hover:text-pink-800 text-xl"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-pink-600 hover:text-pink-800 text-xl"
              title="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          <Link to="/">
            <button className="mt-8 bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Bookstore Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3151048372685!2d77.20902111508254!3d28.61393998242486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b7af10b5a5%3A0x1e1c2a7e91b9ff1d!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1699988888888!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
