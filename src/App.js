
import './App.css';
import { Header } from './Componats/Header';
import Slider from "./Componats/Slider"
import { About } from './Componats/About';
import Footer from './Componats/Footer';
import { Join } from './Componats/Join';
import Transformation from './Componats/transformation';

function App() {
  return (
    <>
      <Header sticky="top" />
      <Slider />
      <About />
      <Join />
      <Transformation />
      <Footer />



    </>
  );
}

export default App;
