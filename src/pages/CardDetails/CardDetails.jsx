import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.css";
import Collapse from "../../components/Collapse/Collapse";
import Stars from "../../components/Stars/Stars";
import Tag from "../../components/Tag/Tag";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";

function CardDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const { host } = data ? data : {};
  const nameParts = host ? host.name.split(" ") : [];
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];

  const navigate = useNavigate();

  const [keyAction, setKeyAction] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        const item = jsonData.find((item) => item.id === id);
        if (item) {
          setData(item);
        } else {
          navigate("/not-found-page");
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    function handleKeyDown(event) {
      if (event.keyCode === 37) {
        setKeyAction("left");
      } else if (event.keyCode === 39) {
        setKeyAction("right");
      }
    }

    fetchData();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [id]);

  return (
    <>
      <Header />
      {data && (
        <>
          <Slideshow
            images={data.pictures}
            keyAction={keyAction}
            setKeyAction={setKeyAction}
          />
          <div className={styles["spacer"]}>
            <div>
              <h1>{data.title}</h1>
              <address>{data.location}</address>
            </div>
            <div className={styles["profile"]}>
              <div className={styles["profile__id"]}>
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
              <img
                className={styles["circle"]}
                src={data.host.picture}
                alt={`picture of ${data.host.name}`}
              />
            </div>
          </div>
          <div className={`${styles["spacer"]} ${styles["separator"]}`}>
            <div>
              {data.tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
            <Stars note={parseInt(data.rating)} />
          </div>
          <div className={`${styles["spacer"]} ${styles["colgap"]}`}>
            <Collapse title="Description" texts={[data.description]} />
            <Collapse title="Équipements" texts={data.equipments} />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default CardDetails;
