import "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";

function Home() {
  const [, setData] = useState([]);

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
        <p>Main</p>
        <Card
          title="Titre de la location"
          url="monsite.com"
          width="340px"
          height="340px"
        />
      </main>
      <Footer />
    </>
  );
}

export default Home;
