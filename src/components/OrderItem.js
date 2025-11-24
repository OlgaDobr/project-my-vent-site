import React from 'react';

function OrderItem({ product, quantity }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Артикль: {product.article}</p>
        <p className="card-text">Количество: {quantity}</p>
        <p className="card-text">Цена: {product.price} руб.</p>
        {/* Дополнительные свойства товара: мощность, размеры и т.д. */}
        <p className="card-text">Мощность: {product.power} Вт</p>
      </div>
    </div>
  );
}

export default OrderItem;
