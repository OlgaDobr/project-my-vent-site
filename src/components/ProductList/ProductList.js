import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
    const [orders, setOrders] = useState([]);

    const handleOrder = (product) => {
        setOrders([...orders, product]);
        alert(`Вы купили: ${product.name}`); // Просто для уведомления
    };

    const products = [
        { id: 1, name: 'Товар 1', price: 100 },
        { id: 2, name: 'Товар 2', price: 200 },
        // Добавьте другие товары
    ];

    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onOrder={handleOrder} />
                ))}
            </div>
            <h2>Ваши заказы:</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>{order.name} - {order.price}₽</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
