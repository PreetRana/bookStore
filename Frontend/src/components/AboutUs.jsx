import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">About Our Bookstore</h1>
        <p className="text-gray-700 md:w-3/4 mx-auto">
          Welcome to <span className="font-semibold">BookVerse</span> — your digital haven for
          stories, knowledge, and imagination. We believe that every book opens
          a new world, and our mission is to make those worlds accessible to
          everyone.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/02/59/13/05/360_F_259130513_dM3XdZB7cznmJo8UW29O64DV6ivuSGCw.jpg"
            alt="Bookstore interior"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-pink-500">Our Story</h2>
          <p>
            Founded in 2024, BookVerse started as a small online store for free
            e-books. Over time, we’ve grown into a vibrant community of readers,
            authors, and learners who share a passion for discovering great
            books across all genres.
          </p>

          <h2 className="text-2xl font-semibold text-pink-500">What We Offer</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Wide collection of books — from classics to the latest bestsellers</li>
            <li>Free and premium categories for every reader</li>
            <li>Personalized recommendations based on your interests</li>
            <li>Community events, author interactions, and book clubs</li>
          </ul>

          <h2 className="text-2xl font-semibold text-pink-500">Our Mission</h2>
          <p>
            To inspire and connect readers worldwide by providing easy access to
            meaningful literature — because every page turned brings us closer
            to understanding the world around us.
          </p>

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
