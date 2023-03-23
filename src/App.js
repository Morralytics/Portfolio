import React from "react";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";
import { Resume } from "./pages/Resume";

import Header from "./components/ui/Header"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Project' element={<Project />} />
      <Route path='/Resume' element={<Resume />} />
    </Routes>
    </>
  );
}

export default App;
