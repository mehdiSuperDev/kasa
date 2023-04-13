import styles from "./Card.module.css";
import PropTypes from "prop-types";
// import { useEffect, useState } from "react";

function Card({ title, url, size }) {
  return (
    <article className={styles["card-container"]} width={size}>
      <h2>{title}</h2>
      <img src={url} alt={title} />
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  size: PropTypes.string,
};

Card.defaultProps = {
  size: "340px",
};

export default Card;
