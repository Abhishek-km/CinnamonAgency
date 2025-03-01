import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import Body from "./Component/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Component/Projects";
import Services from "./Component/Services";
import About from "./Component/About";
import Careers from "./Component/Careers";
import Blog from "./Component/Blog";
import Home from "./Component/Home";
import Collaborate from "./Component/Collaborate";
import BlogItem from "./Component/BlogItem";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact path="/"
            element={
              <Home />
            }
          />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/services" element={<Services ></Services>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/collaborate" element={<Collaborate />} />
          <Route
            exact path="/blog/blogItem"
            element={
              <BlogItem />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
