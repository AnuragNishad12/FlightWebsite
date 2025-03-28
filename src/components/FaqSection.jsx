import React, { useEffect, useState } from 'react';

const FaqSection = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Fetch FAQ data from the JSON file
    fetch('/json/faq.json')
      .then((response) => response.json())
      .then((data) => {
        setFaqData(data);
      })
      .catch((error) => console.error('Error fetching FAQ data:', error));
  }, []);

  const toggleFaq = (index) => {
    setFaqData((prevFaqData) =>
      prevFaqData.map((item, i) =>
        i === index ? { ...item, active: !item.active } : { ...item, active: false }
      )
    );
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div id="faq-list" data-aos="fade-up">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${item.active ? 'active' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFaq(index)}
            >
              {item.question} <i className={`fas ${item.active ? 'fa-minus' : 'fa-plus'}`}></i>
            </div>
            {item.active && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;