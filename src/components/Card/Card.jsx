import "./Card.module.css";
import PropTypes from "prop-types";

function Card({ title, url, size }) {
  console.log(`card url: ${url}`);

  return (
    <article width={size}>
      <h2>{title}</h2>
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
