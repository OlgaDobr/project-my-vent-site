import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Если используете роутинг
import axios from 'axios';
//import OrdersPage from './pages/OrdersPage';

const mockOrderItems = [
  {
    product: { id: 1, name: "Вентилятор осевой", article: "VF-100", price: 1200, power: 25 },
    quantity: 2
  },
  {
    product: { id: 2, name: "Фильтр воздушный", article: "FLT-STD", price: 500, power: 0 },
    quantity: 1
  }
];

// ... затем используйте mockOrderItems вместо вызова API, пока не будет готово API
//setOrderItems(mockOrderItems);


function OrderItemsPage() {
  const { orderId } = useParams(); // Получаем ID заказа из URL (если используем роутинг)
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const response = await axios.get(`/api/order_items/${orderId}`); // Замените на ваш API endpoint
        setOrderItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке товаров заказа:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchOrderItems();
  }, [orderId]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка при загрузке данных: {error.message}</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Товары в заказе №{orderId}</h1>
      {/* <OrderItemsList orderItems={orderItems} /> */}
    </div>
  );
}

export default OrderItemsPage;
