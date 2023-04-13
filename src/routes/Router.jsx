import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About.jsx";
import CardDetails from "../pages/CardDetails/CardDetails.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
