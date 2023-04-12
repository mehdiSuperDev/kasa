import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("data.json");
        const jsonData = await response.json();
        console.log(`Good: ${jsonData}`);
        setData(jsonData);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={styles["header"]}>
          <div className={styles["overlay"]}>
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        </div>
        <section className={styles["card-container"]}>
          {data.map((item) => {
            return <Card key={item.id} title={item.title} url={item.cover} />;
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
