import "./Card.module.css";
import PropTypes from "prop-types";

function Card({ title, url, width, height }) {
  console.log(`card url: ${url}`);

  return (
    <article style={{ width: width, height: height }}>
      <h2>{title}</h2>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Card.defaultProps = {
  width: "340px",
  height: "340px",
};

export default Card;
