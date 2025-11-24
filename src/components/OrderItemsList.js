import React from 'react';
import OrderItem from './OrderItem';

function OrderItemsList({ orderItems }) {
  return (
    <div>
      {orderItems.map(item => (
        <OrderItemsList key={item.product.id} product={item.product} quantity={item.quantity} />
      ))}
    </div>
  );
}

export default OrderItemsList;
