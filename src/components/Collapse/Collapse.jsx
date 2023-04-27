import styles from "./Collapse.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";

function Collapse({ title, texts }) {
  const [isShow, setIsShow] = useState(true);

  const toggleCollapse = () => {
    setIsShow(!isShow);
  };

  const icon = isShow ? (
    <FontAwesomeIcon icon={faChevronUp} />
  ) : (
    <FontAwesomeIcon icon={faChevronDown} />
  );

  return (
    <div className={styles["collapse-container"]}>
      <div className={styles["collapse-header"]}>
        <h2>{title}</h2>
        <button onClick={toggleCollapse}>{icon}</button>
      </div>
      {isShow && (
        <div className={styles["collapse-body"]}>
          {texts.map((text, index) => (
            <React.Fragment key={index}>
              {text}
              {index !== texts.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Collapse;
