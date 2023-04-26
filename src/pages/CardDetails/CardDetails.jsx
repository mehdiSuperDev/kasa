import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./CardDetails.module.css";
import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.css";
import Collapse from "../../components/Collapse/Collapse";
import Stars from "../../components/Stars/Stars";
import Tag from "../../components/Tag/Tag";

function CardDetails() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className={styles["header"]}></div>
      <div className={styles["spacer"]}>
        <div>
          <h1>{`CardDetails Page with id: ${id}`}</h1>
          <h2>Sous titre</h2>
        </div>
        <p>Text</p>
      </div>
      <div className={styles["spacer"]}>
        <Tag text="Hello" />
        <Stars note={3} />
      </div>
      <div className={styles["spacer"]}>
        <Collapse title="title" body="body" />
        <Collapse title="title" body="body" />
      </div>
      <Footer />
    </>
  );
}

export default CardDetails;
