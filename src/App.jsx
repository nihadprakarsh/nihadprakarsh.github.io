import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Homepage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Blog from "./pages/Blog.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Homepage />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/blog"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Blog />
              </motion.div>
            }
          />
          <Route
            path="/timeline"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/resume"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <About />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
