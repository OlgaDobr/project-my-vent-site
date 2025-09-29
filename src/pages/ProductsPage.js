import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Section from '../components/Section/Section';
import Card from '../components/Card/Card';
import './ProductsPage.css'; // Стили для страницы продуктов
	
	function ProductsPage() {
	  const [products, setProducts] = useState([]);
	  const [searchTerm, setSearchTerm] = useState('');
	
	  // В реальном приложении, эти данные будут получены с бэкенда через API
	  useEffect(() => {
	    // Имитация загрузки данных
	    const fetchedProducts = [
	      { id: 1, imageUrl: '/img/ img5.jpg', title: 'Вентилятор YWF-4-E', description: 'Высокоэффективный осевой вентилятор для промышленных применений.', link: '/products/1' },
	      { id: 2, imageUrl: '/images/product2.jpg', title: 'Воздуховод гибкий', description: 'Гибкие воздуховоды из ПВХ, армированные спиралью.', link: '/products/2' },
	      { id: 3, imageUrl: '/images/product3.jpg', title: 'Система фильтрации воздуха', description: 'Комплексные решения для очистки воздуха в помещениях.', link: '/products/3' },
	      { id: 4, imageUrl: '/images/product4.jpg', title: 'Рекуператор тепла', description: 'Энергоэффективные решения для вентиляции с рекуперацией тепла.', link: '/products/4' },
	      { id: 5, imageUrl: '/images/product5.jpg', title: 'Приточная установка', description: 'Современные приточные установки для создания комфортного микроклимата.', link: '/products/5' },
	      { id: 6, imageUrl: '/images/product6.jpg', title: 'Шкаф управления вентиляцией', description: 'Автоматизированные системы управления для вентиляционных установок.', link: '/products/6' },
	    ];
	    setProducts(fetchedProducts);
	  }, []);
	
	  const filteredProducts = products.filter(product =>
	    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
	    product.description.toLowerCase().includes(searchTerm.toLowerCase())
	  );
	
	  return (
	    <div>
	      <Section title="Наши Продукты">
	        <Form.Group className="mb-4">
	          <Form.Control
	            type="text"
	            placeholder="Поиск по названию или описанию..."
	            value={searchTerm}
	            onChange={(e) => setSearchTerm(e.target.value)}
	          />
	        </Form.Group>
	
	        <Row>
	          {filteredProducts.length > 0 ? (
	            filteredProducts.map(product => (
	              <Col key={product.id} md={6} lg={4} className="mb-4">
	                <Card
	                  imageUrl={product.imageUrl}
	                  title={product.title}
	                  description={product.description}
	                  link={product.link}
	                />
	              </Col>
	            ))
	          ) : (
	            <Col className="text-center">
	              <p>Продукты по вашему запросу не найдены.</p>
	            </Col>
	          )}
	        </Row>
	      </Section>
	    </div>
	  );
	}
	
	export default ProductsPage;
