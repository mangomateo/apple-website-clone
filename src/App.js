import './App.css';

import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ProductGallery from './Components/ProductGallery';
import Promos from './Components/Promos';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductGallery />
      <Promos />
      <Footer />
    </div>
  );
}

export default App;
