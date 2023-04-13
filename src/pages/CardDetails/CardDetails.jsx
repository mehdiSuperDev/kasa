import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./CardDetails.module.css";
import { useParams } from "react-router-dom";

function CardDetails() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <h1>{`CardDetails Page with id: ${id}`}</h1>
      <Footer />
    </>
  );
}

export default CardDetails;
