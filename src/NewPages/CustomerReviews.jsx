import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Serginho La Gracia",
    rating: 4,
    text: "In March 17 I had the Paul Pogba 16/17 Manchester United jersey, I have many carriers and I heard great things with this company so I...",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "John Doe",
    rating: 5,
    text: "Amazing service! The jersey I ordered was perfect and arrived on time. Highly recommend this company!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Serginho La Gracia",
    rating: 4,
    text: "In March 17 I had the Paul Pogba 16/17 Manchester United jersey, I have many carriers and I heard great things with this company so I...",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "John Doe",
    rating: 5,
    text: "Amazing service! The jersey I ordered was perfect and arrived on time. Highly recommend this company!",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Serginho La Gracia",
    rating: 4,
    text: "In March 17 I had the Paul Pogba 16/17 Manchester United jersey, I have many carriers and I heard great things with this company so I...",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "John Doe",
    rating: 5,
    text: "Amazing service! The jersey I ordered was perfect and arrived on time. Highly recommend this company!",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller screens
        settings: {
          slidesToShow: 1, // Show only 1 card on tablets
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1, // Show only 1 card on mobile
        },
      },
    ],
  };
  

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-5 text-right">Recent reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-2">
            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <div className="flex items-center mb-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="text-base font-bold text-custom-purple">
                    {review.name}
                  </h3>
                  <div className="flex">
                    {Array(review.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-red-600 text-sm">★</span>
                      ))}
                    {Array(5 - review.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-gray-300 text-sm">★</span>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-700 mb-3">{review.text}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">{review.company}</span>
                <span className="text-xs text-gray-500">{review.website}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReviews;
