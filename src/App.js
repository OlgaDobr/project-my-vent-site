import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import Card from './components/Card/Card';
import ProductCard from './components/ProductCard/ProductCard';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import CarouselPage from './pages/CarouselPage';

//import MediaPage from './pages/MediaPage';
import './App.css';
import logo from './logo.svg';


	function App() {
	  return (
	    <Router>
      <div className="App">
	        <Header />
        <main className="container mt-4"> {/* Используем Bootstrap класс для отступов */}
          <Routes>
            <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/card" element={<Card />} />
            <Route path="/section" element={<Section />} />
            <Route path="/productcard" element={<ProductCard />} />
            <Route path="/carousel" element={<CarouselPage />} />
           
           

            {/* Добавьте другие маршруты по необходимости */}
          </Routes>
	        </main>
        <Footer />
      </div>
    </Router>
  );	
}

export default App;
