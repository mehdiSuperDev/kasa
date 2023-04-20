import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Collapse from "../components/Collapse/Collapse";

function About() {
  return (
    <>
      <Header />
      <div>
        <Collapse title="titre" body="body" />
      </div>
      <Footer />
    </>
  );
}

export default About;
