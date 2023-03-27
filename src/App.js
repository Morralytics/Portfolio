import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Work } from "./pages/Work";
import { Resume } from "./pages/Resume";

import Header from "./components/ui/Header"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Work' element={<Work />} />
      <Route path='/Resume' element={<Resume />} />
    </Routes>
    </>
  );
}

export default App;
