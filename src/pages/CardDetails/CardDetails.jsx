import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./CardDetails.module.css";
import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.css";
import Collapse from "../../components/Collapse/Collapse";
import Stars from "../../components/Stars/Stars";

function CardDetails() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className={styles["header"]}></div>
      <h1>{`CardDetails Page with id: ${id}`}</h1>
      <Stars note={3} />
      <div className={styles["body-footer"]}>
        <Collapse title="title" body="body" />
        <Collapse title="title" body="body" />
      </div>
      <Footer />
    </>
  );
}

export default CardDetails;
