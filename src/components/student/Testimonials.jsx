import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="pb-16 px-6 md:px-0">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        Testimonials
      </h2>

      <p className="mt-6 text-gray-600 text-sm sm:text-lg leading-relaxed text-center">
        Hear from our learners as they share their journeys of transformation,<span className="md:block md:text-center">
        success, and how our platform has made a difference.

        </span>
      </p>

      {/* Grid */}
      <div className="mt-10 grid sm:grid-cols-2 mx-22 lg:grid-cols-3 gap-6 max-w-5xl ">
        {dummyTestimonial.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col"
          >
            {/* Top */}
            <div className="flex items-center gap-4 bg-gray-200 p-4 rounded-t-xl">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div className="text-left">
                <h1 className="text-lg font-semibold text-gray-800">{t.name}</h1>
                <p className="text-gray-600 text-sm">{t.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex mt-3 px-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src={i < Math.floor(t.rating) ? assets.star : assets.star_blank}
                  alt="star"
                  className="w-5 h-5"
                />
              ))}
            </div>

            {/* Feedback */}
            <div className="px-6 pb-6 grow">
              <p className="text-gray-600 mt-4 leading-relaxed text-sm text-left">
                {t.feedback}
              </p>
            </div>

            {/* Read More */}
            <div className="px-6 pb-4 text-left">
              <a href="#"
                className="text-blue-600 text-sm font-medium hover:text-blue-800 underline underline-offset-2"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
