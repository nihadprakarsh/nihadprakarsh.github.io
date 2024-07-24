import Home from "../Home.jsx";
import TypingEffect from "../components/TypingEffect.jsx";
import Navbar from "../components/Navbar.jsx";
import Picture from "../components/Picture.jsx";
const Homepage = () => {
  return (
    <div>
      <Home></Home>
      <Navbar></Navbar>
      <TypingEffect></TypingEffect>
      <Picture></Picture>
    </div>
  );
};

export default Homepage;
