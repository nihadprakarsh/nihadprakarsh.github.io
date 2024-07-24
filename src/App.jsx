import { useState } from "react";
import "./App.css";
import "./Home.jsx";
import Home from "./Home.jsx";
import TypingEffect from "./components/TypingEffect.jsx";
import Navbar from "./components/Navbar.jsx";
import Picture from "./components/Picture.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home></Home>
      <Navbar></Navbar>
      <TypingEffect></TypingEffect>
    </>
  );
}

export default App;
