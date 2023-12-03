import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import QaSection from "./components/QaSection";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <QaSection />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
