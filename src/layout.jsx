import React from "react";
import Footer from "./components/Footer/Footer";
import Nav_Demo from "./components/Header/ModuleItems";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import IntroductionPage from "./components/pages/IntroductionPage";
import EDAPage from "./components/pages/EDAPage";
import Conclusion from "./components/pages/Conclusion";
function Layout() {
  return (
    <div>
      <Header />

      {/* <MainContent></MainContent> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/eda" element={<EDAPage />} />
        <Route path="/conclusion" element={<Conclusion />} />
        {/* <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/>
        <Route path="" element={}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
