import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import About from './components/About'
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";


function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
