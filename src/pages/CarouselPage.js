// import React from 'react';
// import './CarouselPage.css'; 
// import Carousel from 'react-bootstrap/Carousel';
// import img1 from "../assets/img object/img1.jpg";
// import img2 from "../assets/img object/img2.jpg";
// import img3 from "../assets/img object/img3.jpg";

// const CarouselPage = () => {
//   return (
//     <div className="container my-4">
//       <h2 className="text-center mb-4">Наши объекты</h2>
//       <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
//         {/* Индикаторы */}
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#myCarousel"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>

//         {/* Слайды */}
//         {/* <div id="carousel" class="carousel slide" data-ride="carousel"></div> */}
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//                src={img1}
//               className="d-block w-100"
//               alt="Первый слайд"
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Первый слайд</h5>
//               <p>Описание для первого слайда.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src={img2}
//               className="d-block w-100"
//               alt="Второй слайд"
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Второй слайд</h5>
//               <p>Описание для второго слайда.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src={img3}
//               className="d-block w-100"
//               alt="Третий слайд"
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Третий слайд</h5>
//               <p>Описание для третьего слайда.</p>
//             </div>
//           </div>
//         </div>

//         {/* Управление */}
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#myCarousel"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Предыдущий</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#myCarousel"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Следующий</span>
//         </button>



//       </div>
//     </div>
//   );
// };

// export default CarouselPage;


import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselPage.css'; 
import img1 from "../assets/img object/img1.jpg";
import img2 from "../assets/img object/img2.jpg";
import img3 from "../assets/img object/img3.jpg";
import img4 from "../assets/img object/img4.jpg";
import img5 from "../assets/img object/img5.jpg";
import img6 from "../assets/img object/img6.jpg";
import img7 from "../assets/img object/img7.jpg";
import img8 from "../assets/img object/img8.jpg";
import img9 from "../assets/img object/img9.jpg";
import img10 from "../assets/img object/img10.jpg";
import img11 from "../assets/img object/img11.jpg";
import img12 from "../assets/img object/img12.jpg";
import img13 from "../assets/img object/img13.jpg";
import img14 from "../assets/img object/img14.jpg";
import img15 from "../assets/img object/img15.jpg";
import img16 from "../assets/img object/img16.jpeg";
import img17 from "../assets/img object/img17.jpeg";



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  <div className="container my-4">
      <h2 className="text-center mb-4">Наши объекты</h2>
       <div id="myCarousel" className="carousel slide" data-bs-ride="carousel"></div>
       </div>
  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img7}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img8}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img
          className="d-block w-100"
          src={img9}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img
          className="d-block w-100"
          src={img10}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img11}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img12}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img13}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img14}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img
          className="d-block w-100"
          src={img15}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img
          className="d-block w-100"
          src={img16}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <img
          className="d-block w-100"
          src={img17}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Первый слайд</h3>
          <p>Описание первого слайда.</p>
        </Carousel.Caption>
      </Carousel.Item>

      
      {/* ... остальные слайды ... */}
    </Carousel>
  );
}



// {/* <div class="my-2">
//   <button class="btn btn-primary" data-action="cycle">Запустить</button>
//   <button class="btn btn-primary" data-action="pause">Остановить</button>
//   <button class="btn btn-primary" data-action="prev">Предыдущий</button>
//   <button class="btn btn-primary" data-action="next">Следующий</button>
//   <button class="btn btn-primary" data-action="to-1">На 1 слайд</button>
//   <button class="btn btn-primary" data-action="to-2">На 2 слайд</button>
//   <button class="btn btn-primary" data-action="to-3">На 3 слайд</button>
// </div>

//  (function () {
// ('#carousel').carousel({
//     interval: 10000,
//     keyboard: false,
//     pause: 'hover',
//     ride: 'carousel',
//     wrap: false
//   });
// }); 


// (function () {
//   // метод cycle
//   ('.btn').click(function () {
//     var action = (this).attr('data-action');
//     if (action.indexOf('to') >= 0) {
//       var action = parseInt(action.substring(3))-1;
//     }
//     ('#carousel').carousel(action);
//   });
// });

export default ControlledCarousel;

