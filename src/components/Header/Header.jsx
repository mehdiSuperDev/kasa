import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <section className={styles["banner-container"]}>
      <Link to="/">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <ul className={styles["banner-container-list"]}>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </section>
  );
}

export default Header;
