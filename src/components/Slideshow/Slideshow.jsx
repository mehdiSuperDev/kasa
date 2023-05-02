import styles from "./Slideshow.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Slideshow({ images, keyAction, setKeyAction }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (keyAction === "left") {
      handleLeftClick();
      setKeyAction(null);
    } else if (keyAction === "right") {
      handleRightClick();
      setKeyAction(null);
    }
  }, [keyAction]);

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

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  keyAction: PropTypes.oneOf([null, "left", "right"]),
  setKeyAction: PropTypes.func.isRequired,
};

export default Slideshow;
