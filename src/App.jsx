import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { StoryPage } from "./component/StoryPage";
import { Footer } from "./component/footer";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buku/:id" element={<StoryPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
