
import './App.css';

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/nameheader/Header";
import Hero from "./components/name/Hero";
import Products from "./components/products/Products";
import Slider from "./components/Slider/Slider";
import Testimonial from "./components/testimonial/Testimonial";
import Virtual from "./components/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
