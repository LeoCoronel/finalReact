import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import NotFound from "./Pages/notFound/notFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
