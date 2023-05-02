import styles from "./Slideshow.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Arrow = ({ direction, onClick }) => {
  const arrowDirection =
    direction === "left" ? "fa-chevron-left" : "fa-chevron-right";
  return (
    <button onClick={onClick}>
      <i className={`fas ${arrowDirection}`} />
    </button>
  );
};

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={styles["slide-show"]}>
      <button className={styles["left-arrow"]} onClick={handleLeftClick}>
        {"<"}
      </button>
      <img src={images[currentIndex]} />
      <button className={styles["right-arrow"]} onClick={handleRightClick}>
        {">"}
      </button>
    </div>
  );
}

Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Slideshow;
