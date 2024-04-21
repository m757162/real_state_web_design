import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TemplateList from "./pages/pageList";
import Home from "./pages/Home";
import Home2 from "./pages/Home_2";
import Home3 from "./pages/Home_3";

import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<TemplateList />} />
        <Route path="/home-1" element={<Home />} />
        <Route path="/home-2" element={<Home2 />} />
        <Route path="/home-3" element={<Home3 />} />
      </Routes>
     
    </>
  );
}

export default App;
