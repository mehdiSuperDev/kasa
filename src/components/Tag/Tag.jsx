import PropTypes from "prop-types";
import styles from "./Tag.module.css";

function Tag({ text }) {
  return <span className={styles["box"]}>{text}</span>;
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
