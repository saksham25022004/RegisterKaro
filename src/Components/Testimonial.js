import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import chris from '../Images/chris.png';
import uppercomma from '../Images/uppercomma.png';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet occaecat cupidatat non proident aute irure sint amet occaecat cupidatat non occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet occaecat cupidatat non proident aute irure sint amet occaecat cupidatat non occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet occaecat cupidatat non proident aute irure sint amet occaecat cupidatat non occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-[#1C4670] py-16 px-4">
      <div className="ml-10">
        <div className="flex justify-between items-center mb-12 mx-5">
          <h2 className="text-3xl font-bold text-white">What peoples says about us</h2>
          <div className="flex gap-4 mr-10">
            <button
              onClick={prevSlide}
              className="p-4 bg-white rounded-full hover:bg-blue transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#1478F1]" />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 bg-[#FFA229] rounded-full hover:bg-orange-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 50}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[520px] h-[318px] flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="flex justify-between items-start mb-6">
                    <img src={uppercomma} alt='uppercomma' />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(testimonial.rating)
                              ? 'text-yellow-400'
                              : i < testimonial.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img
                      src={chris}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.author}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-orange-500' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;