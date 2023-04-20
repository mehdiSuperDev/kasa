import styles from "./Collapse.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Collapse({ title, body }) {
  const [isShow, setIsShow] = useState(true);

  const toggleCollapse = () => {
    setIsShow(!isShow);
  };

  const icon = isShow ? (
    <FontAwesomeIcon icon="fa-solid fa-angle-up" />
  ) : (
    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
  );

  return (
    <div className={styles["collapse-container"]}>
      <div className={styles["collapse-header"]}>
        <h2>{title}</h2>
        <button onClick={toggleCollapse}>{icon}</button>
      </div>
      {isShow && <p>{body}</p>}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Collapse;
