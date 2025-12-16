// import React, { useState } from 'react';
// import './ProductCard.css'; 
// import ProductsPage from '../../pages/ProductsPage';

// function ProductCard({ imageUrl, title, description }) {
//   const [showDescription, setShowDescription] = useState(false);

//   const handleMouseEnter = () => {
//     setShowDescription(true);
//   };

//   const handleMouseLeave = () => {
//     setShowDescription(false);
//   };

//   const handleClick = () => {
//     setShowDescription(!showDescription); // Переключение состояния при клике
//   };

//   return (
//     <div className="card product-card-container mb-4">
//       <div className="card-body">
//         <div
//           className="image-wrapper"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           onClick={handleClick} // Добавляем onClick для варианта с кликом
//           style={{ cursor: 'pointer' }} // Указываем, что элемент кликабельный
//         >
//           <img src={imageUrl} className="card-img-top" alt={title} />
//           {/* Описание будет показываться поверх картинки при hover */}
//           {showDescription && (
//             <div className="image-overlay">
//               <div className="image-text">{description}</div>
//             </div>
//           )}
//         </div>
//         <h5 className="card-title mt-3">{title}</h5>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ProductList from '../ProductList/ProductList';

const ProductCard = ({ product, onOrder }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Цена: {product.price}₽</p>
                    <button className="btn btn-primary" onClick={() => onOrder(product)}>
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

