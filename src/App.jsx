import Header from "./components/Header/Header";
import Hero from "./components/portfolio/Hero";
// import Skills from "./components/portfolio/Skills";
import Projects from "./components/portfolio/Projects";
import Certificates from "./components/portfolio/Certifications";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero />
      {/* <Skills /> */}
      <Projects />
      <Certificates />
      <Footer />
    </>
  );
}

export default App;
