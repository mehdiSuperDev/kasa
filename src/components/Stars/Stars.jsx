import styles from "./Stars.module.css";
import PropTypes from "prop-types";

function Stars({ note }) {
  const root = document.querySelector(":root");
  const computedStyles = getComputedStyle(root);
  const primaryColor = computedStyles.getPropertyValue("--color-primary");
  const secondaryColor = computedStyles.getPropertyValue("--color-secondary");

  const n = note < 0 ? 0 : note > 5 ? 5 : note;

  return (
    <div className={styles["stars-container"]}>
      {[...Array(n)].map((_, i) => (
        <Star key={i} color={primaryColor} />
      ))}
      {[...Array(5 - n)].map((_, i) => (
        <Star key={i} color={secondaryColor} />
      ))}
    </div>
  );
}

function Star(props) {
  const { color } = props;

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      dangerouslySetInnerHTML={{
        __html: `
            <polygon
              points="10 1 13.09 7.64 20 8.82 15 13.34 16.18 20 10 16.18 3.82 20 5 13.34 0 8.82 6.91 7.64"
              style="fill:${color}"
            />
          `,
      }}
    />
  );
}

Star.propTypes = {
  color: PropTypes.string.isRequired,
};

Stars.propTypes = {
  note: PropTypes.number.isRequired,
};

export default Stars;
