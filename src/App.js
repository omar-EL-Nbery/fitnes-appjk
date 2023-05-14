
import './App.css';
import { Header } from './Componats/Header';
import Slider from "./Componats/Slider"
import { About } from './Componats/About';
import Footer from './Componats/Footer';
import { Join } from './Componats/Join';
import CardCarousel from './Componats/Cards';
function App() {
  return (
    <>
      <Header sticky="top" />
      <Slider />
      <About />
      <Join />
      <Footer />



    </>
  );
}

export default App;
