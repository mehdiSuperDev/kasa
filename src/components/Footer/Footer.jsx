import styles from "./Footer.module.css";
import logo from "../../assets/logo-f.png";

function Footer() {
  return (
    <footer>
      <img className={styles["logo"]} src={logo} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
