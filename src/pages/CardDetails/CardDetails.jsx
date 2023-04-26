import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.css";
import Collapse from "../../components/Collapse/Collapse";
import Stars from "../../components/Stars/Stars";
import Tag from "../../components/Tag/Tag";
import { useState, useEffect } from "react";

function CardDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        const item = jsonData.find((item) => item.id === id);
        console.log(`item: ${item}`);
        if (item) {
          setData(item);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      {data && (
        <>
          <div className={styles["header"]}></div>
          <div className={styles["spacer"]}>
            <div>
              <h1>{data.title}</h1>
              <address>{data.location}</address>
            </div>
            <p>{data.host.name}</p>
          </div>
          <div className={styles["spacer"]}>
            {data.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
            <Stars note={parseInt(data.rating)} />
          </div>
          <div className={styles["spacer"]}>
            <Collapse title="Description" body={data.description} />
            <Collapse title="Équipements" body={data.equipments.join("\n")} />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default CardDetails;
