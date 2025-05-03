import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ModalLogin from "./components/Login/ModalLogin";
import products from "./Product/Products";
import Slide from "./Product/Slide";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="App">
      <Header onUserClick={() => setShowLoginForm(true)} />
      {showLoginForm && <ModalLogin onClose={() => setShowLoginForm(false)} />}

      <Slide />

      <main>
        <header className="catalog-header">
          <h1>Produk Terbaru untuk Kamu</h1>
          <a href="/all-products" className="view-all">
            LIHAT SEMUA
          </a>
        </header>

        <div className="product-catalog">
          {products.map((product) => (
            <a
              href="/all-products"
              className="product-section"
              key={product.id}
            >
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <p className="original-price">{product.originalPrice}</p>
              <p className="discounted-price">{product.discountedPrice}</p>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
