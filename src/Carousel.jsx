import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      >
        {/* Optional: You can add overlay content here */}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
