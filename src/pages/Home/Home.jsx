import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { NavLink } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
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
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <section className={styles["card-container"]}>
          {data.map((item) => {
            return (
              <NavLink key={item.id} to={`/card/${item.id}`}>
                <Card title={item.title} url={item.cover} />
              </NavLink>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
