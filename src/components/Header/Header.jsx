import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className={styles["banner-container"]}>
      <NavLink to="/">
        <img className={styles["logo"]} src={logo} alt="logo Kasa" />
      </NavLink>
      <nav>
        <ul className={styles["banner-container-list"]}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? styles["underline"] : ""} navLink-li`
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? styles["underline"] : ""} navLink-li`
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
