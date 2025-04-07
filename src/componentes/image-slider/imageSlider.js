import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./image-slider.css"; // Make sure to add the styles

const ImageSlider = (props) => {
  const [index, setIndex] = useState(0);

  const images = props.images;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {/* Background Image */}
      <img src={images[index].src} alt="slider" className="slider-image" />

      {/* Animated Text - Starts in the middle and moves to the bottom-left */}
      <motion.div
        className="slider-text"
        key={index}
        // initial={{ opacity: 0, x: 0, y: "-50%" }} // Start in the middle
        initial={{ opacity: 0, x: 350, y: -300 }}

        // animate={{ opacity: 1, x: "-100%", y: "250%" }} // Move to bottom-left
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {images[index].text}
        <div>
          <a href="\contact"> פרטים </a>
        </div>
      </motion.div>

      <button className="slider-arrow left" onClick={prevSlide} onTouchStart={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="slider-arrow right" onClick={nextSlide} onTouchStart={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImageSlider;
