import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./UI//Navbar/Navbar.jsx"
import Footer from "./UI/Footer/Footer.jsx"
import News from "./pages/News";
import Clubs from "./pages/Clubs";
import Competitions from "./pages/Competitions";
import Coaches from "./pages/Coaches";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/coaches" element={<Coaches />} />
          </Routes>
          <Footer/>
      </Router>
  );
};

export default App;
