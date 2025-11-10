import React from 'react';
import './CarouselPage.css'; 
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/img object/img1.jpg";
import img2 from "../assets/img object/img2.jpg";
import img3 from "../assets/img object/img3.jpg";

const CarouselPage = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Наши объекты</h2>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Индикаторы */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Слайды */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
               src={img1}
              className="d-block w-100"
              alt="Первый слайд"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Первый слайд</h5>
              <p>Описание для первого слайда.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="Второй слайд"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Второй слайд</h5>
              <p>Описание для второго слайда.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="Третий слайд"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Третий слайд</h5>
              <p>Описание для третьего слайда.</p>
            </div>
          </div>
        </div>

        {/* Управление */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselPage;

