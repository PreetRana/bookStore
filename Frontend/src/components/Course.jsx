import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import list from "../../public/list.json";

function Course() {
  const [book] = useState(list);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here!</span>
          </h1>

          <p className="mt-12 text-gray-700 text-lg">
            Discover a world of knowledge waiting for you! Whether you’re
            exploring classic literature, uncovering new worlds through sci-fi,
            or diving deep into the mysteries of history and technology — our
            collection has something for every reader. Learn, grow, and get
            inspired one page at a time.
          </p>

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
