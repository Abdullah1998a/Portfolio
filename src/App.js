import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/style.css";

function App() {
  return (
    <>
     <Navbar />
     <Home />
     <Services />
     <Works />
     <Contact />
     <Footer/>
    </>
  )
}

export default App;;
