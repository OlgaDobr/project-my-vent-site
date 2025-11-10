import React, { useState } from 'react';
import './ProductCard.css'; // Создадим этот CSS файл для дополнительных стилей
import ProductsPage from '../../pages/ProductsPage';

function ProductCard({ imageUrl, title, description }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  const handleClick = () => {
    setShowDescription(!showDescription); // Переключение состояния при клике
  };

  return (
    <div className="card product-card-container mb-4">
      <div className="card-body">
        <div
          className="image-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick} // Добавляем onClick для варианта с кликом
          style={{ cursor: 'pointer' }} // Указываем, что элемент кликабельный
        >
          <img src={imageUrl} className="card-img-top" alt={title} />
          {/* Описание будет показываться поверх картинки при hover */}
          {showDescription && (
            <div className="image-overlay">
              <div className="image-text">{description}</div>
            </div>
          )}
        </div>
        <h5 className="card-title mt-3">{title}</h5>
      </div>
    </div>
  );
}

export default ProductCard;
