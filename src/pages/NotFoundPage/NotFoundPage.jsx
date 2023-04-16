import styles from "./NotFoundPage.module.css";
import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <Header />
      <div className={styles["nfp-container"]}>
        <div>
          <h1>404</h1>
          <p>{"Oups! La page que vous demandez n'existe pas."}</p>
        </div>
        <NavLink to="/">
          <p>{"Retourner sur la page d'accueil"}</p>
        </NavLink>
      </div>
    </>
  );
}

export default NotFoundPage;
