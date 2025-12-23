import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleOrder = () => {
    // логика оформления заказа
    alert('Заказ оформлен!');
    clearCart();
  };

  return (
    <div className="container mt-4">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name}
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Удалить</button>
              </li>
            ))}
          </ul>
          <button className="btn btn-success" onClick={handleOrder}>Оформить заказ</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
