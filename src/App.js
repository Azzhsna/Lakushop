import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ModalLogin from "./components/Login/ModalLogin";

const products = [
  {
    id: 1,
    name: "LAKUEMAS – E-VOUCHER EMAS Nominal 100 Ribu",
    originalPrice: "Rp. 110.000",
    discountedPrice: "Rp. 104.000",
    img: "https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/product/Voucher-Nominal-100.png",
  },
  {
    id: 2,
    name: "LAKUEMAS – E-VOUCHER EMAS Nominal 500 Ribu",
    originalPrice: "Rp. 520.000",
    discountedPrice: "Rp. 510.000",
    img: "https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/product/Voucher-Nominal-500.png",
  },
  {
    id: 3,
    name: "LAKUEMAS – E-VOUCHER EMAS Nominal 1 Juta",
    originalPrice: "Rp. 1.030.000",
    discountedPrice: "Rp. 1.017.000",
    img: "https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/product/Voucher-Nominal-1jt.png",
  },
  {
    id: 4,
    name: "LAKUEMAS – E-VOUCHER EMAS Nominal 3 Juta",
    originalPrice: "Rp. 3.080.000",
    discountedPrice: "Rp. 3.046.000",
    img: "https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/product/Voucher-Nominal-3jt.png",
  },
  {
    id: 5,
    name: "LAKUEMAS – E-VOUCHER EMAS Nominal 5 Juta",
    originalPrice: "Rp. 10.250.000",
    discountedPrice: "Rp. 10.095.000",
    img: "https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/product/Voucher-Nominal-5jt.png",
  },
  {
    id: 6,
    name: "LAKUEMAS – E-VOUCHER EMAS Nominal 10 Juta",
    originalPrice: "Rp. 10.250.000",
    discountedPrice: "Rp. 10.095.000",
    img: "https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/product/Voucher-Nominal-10jt.png",
  },
  {
    id: 7,
    name: "LAKUEMAS – E-VOUCHER EMAS Nominal 50 Juta",
    originalPrice: "Rp. 50.990.000",
    discountedPrice: "Rp. 50.000.000",
    img: "https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/product/Voucher-Nominal-50jt.png",
  },
];

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="App">
      <Header onUserClick={() => setShowLoginForm(true)} />
      {showLoginForm && <ModalLogin onClose={() => setShowLoginForm(false)} />}

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="product-slider"
      >
        <SwiperSlide>
          <img
            src="https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/slider/slider-001-lakushop-lakuemas.png"
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/slider/slider-002-lakushop-lakuemas.png"
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://lakuemas.oss-ap-southeast-5.aliyuncs.com/ecommerce/slider/slider-003-lakushop-lakuemas.png"
            alt="slide3"
          />
        </SwiperSlide>
      </Swiper>

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
