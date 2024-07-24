import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
// import Contact from "./pages/Contact.jsx"

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<About />}></Route>
        <Route path="/timeline" element={<About />}></Route>
        <Route path="/contact" element={<About />}></Route>
        <Route path="/resume" element={<About />}></Route>
      </Routes>
    </Router>
    // <About></About>
  );
}

export default App;
