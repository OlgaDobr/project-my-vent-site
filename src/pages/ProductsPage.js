import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import Section from '../components/Section/Section';
import Card from '../components/Card/Card';
import ProductCard from '../components/ProductCard/ProductCard';
import './ProductsPage.css'; // Стили для страницы продуктов
import ВентиляторYWF4E from "../assets/img/Вентилятор YWF-4-E.jpeg"; 
import Воздуховодгибкий from "../assets/img/Воздуховод гибкий.jpeg"; 

    
	
	function ProductsPage() {
	  const [products, setProducts] = useState([]);
	  const [searchTerm, setSearchTerm] = useState('');
	
	  // В реальном приложении, эти данные будут получены с бэкенда через API
	  useEffect(() => {
	    // Имитация загрузки данных
	    const mockProducts = [
	      { id: 1, imageUrl: '../assets/img/Вентилятор.jpeg', title: 'Вентилятор YWF-4-E', description: 'Высокоэффективный осевой вентилятор для промышленных применений.', link: '/products/1' },
	      { id: 2, imageUrl: '../assets/img/Воздуховод гибкий.jpeg', title: 'Воздуховод гибкий', description: 'Гибкие воздуховоды из ПВХ, армированные спиралью.', link: '/products/2' },
	      { id: 3, imageUrl: '/images/product3.jpg', title: 'Система фильтрации воздуха', description: 'Комплексные решения для очистки воздуха в помещениях.', link: '/products/3' },
	      { id: 4, imageUrl: '/images/product4.jpg', title: 'Рекуператор тепла', description: 'Энергоэффективные решения для вентиляции с рекуперацией тепла.', link: '/products/4' },
	      { id: 5, imageUrl: '/images/product5.jpg', title: 'Приточная установка', description: 'Современные приточные установки для создания комфортного микроклимата.', link: '/products/5' },
	      { id: 6, imageUrl: '/images/product6.jpg', title: 'Шкаф управления вентиляцией', description: 'Автоматизированные системы управления для вентиляционных установок.', link: '/products/6' },
	    ];
	    setProducts(mockProducts);
	  }, []);
	
	  const filteredProducts = products.filter(product =>
	    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
	    product.description.toLowerCase().includes(searchTerm.toLowerCase())
	  );
	
	  return (
	    <div>
			<Container>
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
	                  imageUrl={ВентиляторYWF4E}
					  imageUrl={Воздуховодгибкий}
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
		  </Container>
	    </div>
	  );
	}
	
	export default ProductsPage;
