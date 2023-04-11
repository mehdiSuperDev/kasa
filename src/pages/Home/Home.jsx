import "./Home.module.css";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";

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

  return <Header />;
}

export default Home;
