import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcome here to learn{" "}
              <span className="text-pink-500">
                <Typewriter
                  words={["something new!", "everyday!", "with us!"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </span>
            </h1>
            <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
              Discover stories that inspire, ideas that challenge, and worlds that
              transport you beyond imagination. Whether you’re diving into science
              fiction, mythology, or timeless classics — our collection is curated
              to ignite curiosity and a lifelong love for reading. Start your next
              great chapter today.
            </p>
          </div>
        </div>

        <div className="order-1 w-full mt-20 md:w-1/2 flex justify-center md:justify-end">
          <img
            src='https://thumbs.dreamstime.com/b/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-lg"
            alt="Bookstore banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
