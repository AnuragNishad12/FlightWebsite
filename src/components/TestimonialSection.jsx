/* global Swiper */
import React, { useEffect, useState } from 'react';

const TestimonialSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the JSON file
    fetch('/json/review.json')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
      })
      .catch((error) => console.error('Error loading reviews:', error));
  }, []);

  useEffect(() => {
    // Initialize Swiper
    if (window.Swiper) {
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    }
  }, [reviews]); // Re-initialize Swiper if reviews change

  return (
    <section className="testimonial-section" id="feedback-sec">
    <h2 className="section-title">Customer Reviews</h2>
    <div className="swiper-container" data-aos="fade-up">
      <div className="swiper-wrapper">
        {reviews.map((review) => (
          <div className="swiper-slide" key={review.id}>
            <div className="bg-white rounded-2xl shadow-lg p-8 relative transform transition-all duration-300 hover:shadow-xl mx-4 my-12">
              {/* Profile Image */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {review.name}
                </h3>
                
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, index) => (
                    <span 
                      key={index} 
                      className="text-yellow-400 text-lg animate-pulse"
                    >
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {review.review.length > 100 
                    ? `${review.review.slice(0, 100)}...` 
                    : review.review}
                </p>

                {/* Date */}
                <span className="text-sm text-gray-400 italic">
                  {review.date}
                </span>
              </div>

              {/* Decorative Quote Mark */}
              <div className="absolute top-14 right-6 text-6xl text-gray-100 font-serif">
                "
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  </section>
  );
};

export default TestimonialSection;
