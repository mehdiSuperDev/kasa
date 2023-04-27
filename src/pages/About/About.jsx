import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import styles from "./About.module.css";
import local from "../../locale/aboutLocal";

function About() {
  const fields = Object.values(local).map((field) => (
    <Collapse key={field.title} title={field.title} texts={[field.text]} />
  ));

  return (
    <>
      <Header />
      <div className={styles["header"]}></div>
      <div className={styles["about-container"]}>{fields}</div>
      <Footer />
    </>
  );
}

export default About;
