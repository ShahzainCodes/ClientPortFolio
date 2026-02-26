import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";
import Page1 from "./Components/pages/Page1";

// css
import "./App.css";
import "./Styles/Header.css";
import "./Styles/main.css";
import "./Styles/portfolio.css";
import "./Styles/TextSlider.css";
import "./Styles/Footer.css";
import Footer_Layout from "./Components/Footer/Footer_Layout";
import ScrollerBtn from "./Components/scroller_btn";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
        </Routes>
        <Footer_Layout />
        <ScrollerBtn />
      </Router>
    </div>
  );
};

export default App;
