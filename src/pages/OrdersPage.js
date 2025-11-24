import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Orders.css'; 
//import { API_ENDPOINT } from '../config'; // Предполагаемый файл конфигурации

const mockOrders = [
    { id: 1, orderDate: '2025-11-15', customer: 'Иванов Иван', total: 15000, status: 'В обработке', items: [/* детали заказа */] },
    { id: 2, orderDate: '2025-11-10', customer: 'Петров Петр', total: 22000, status: 'Доставлен', items: [/* детали заказа */]  },
    { id: 3, orderDate: '2025-11-05', customer: 'Сидоров Сергей', total: 18000, status: 'Отменен', items: [/* детали заказа */]  },
    { id: 4, orderDate: '2025-10-28', customer: 'Смирнов Алексей', total: 30000, status: 'В обработке', items: [/* детали заказа */]  },
    { id: 5, orderDate: '2025-10-20', customer: 'Кузнецов Дмитрий', total: 25000, status: 'Доставлен', items: [/* детали заказа */]  },
];

function Orders() {
    const [orders, setOrders] = useState(mockOrders); // Использование моковых данных
    const [selectedStatus, setSelectedStatus] = useState('Все');
    const [selectedOrder, setSelectedOrder] = useState(null); // Для отображения деталей заказа
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Функция для фильтрации заказов
    const filteredOrders = selectedStatus === 'Все' ? orders : orders.filter(order => order.status === selectedStatus);


    // Закомментировано, пока не подключен реальный API
    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await fetch(`${API_ENDPOINT}/orders`); // Замените на ваш API endpoint
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             setOrders(data);
    //         } catch (e) {
    //             setError(e.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchOrders();
    // }, []);


    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleOrderClick = (orderId) => {
        const order = orders.find(order => order.id === orderId);
        setSelectedOrder(order);
    };

      const handleCloseDetails = () => {
        setSelectedOrder(null);
    };




    return (
        <div className="container mt-5">
            <h1>Заказы</h1>

            {error && <div className="alert alert-danger">{error}</div>}
            {loading && <div className="alert alert-info">Загрузка заказов...</div>}


            <div className="mb-3">
                <label htmlFor="statusFilter" className="form-label">Фильтр по статусу:</label>
                <select className="form-select" id="statusFilter" value={selectedStatus} onChange={handleStatusChange}>
                    <option value="Все">Все</option>
                    <option value="В обработке">В обработке</option>
                    <option value="Доставлен">Доставлен</option>
                    <option value="Отменен">Отменен</option>
                </select>
            </div>


            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Дата заказа</th>
                            <th>Клиент</th>
                            <th>Сумма</th>
                            <th>Статус</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.customer}</td>
                                <td>{order.total}</td>
                                <td>{order.status}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" onClick={() => handleOrderClick(order.id)}>
                                        Подробнее
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

             {/* Модальное окно с деталями заказа */}
            {selectedOrder && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Детали заказа #{selectedOrder.id}</h5>
                                 <button type="button" className="btn-close" onClick={handleCloseDetails} aria-label="Закрыть"></button>
                            </div>
                            <div className="modal-body">
                                <p><b>Дата заказа:</b> {selectedOrder.orderDate}</p>
                                <p><b>Клиент:</b> {selectedOrder.customer}</p>
                                <p><b>Сумма:</b> {selectedOrder.total}</p>
                                <p><b>Статус:</b> {selectedOrder.status}</p>
                                {/*  Здесь можно добавить отображение позиций заказа  */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseDetails}>Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {selectedOrder && <div className="modal-backdrop fade show"></div>} {/* Отображение backdrop */}

        </div>
    );
}

export default Orders;
