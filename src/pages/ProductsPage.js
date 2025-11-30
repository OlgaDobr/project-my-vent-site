import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import Section from '../components/Section/Section';
import Card from '../components/Card/Card';
import ProductCard from '../components/ProductCard/ProductCard';
import './ProductsPage.css'; 
import Product1 from "../assets/img/Product1.jpeg"; 
import Product2 from "../assets/img/Product2.jpeg"; 
import Product3 from "../assets/img/Product3.jpeg";
import Product4 from "../assets/img/Product4.jpeg";
import Product5 from "../assets/img/Product5.jpeg";
import Product6 from "../assets/img/Product6.jpeg";

    
	
	function ProductsPage() {
	  const [products, setProducts] = useState([]);
	  const [searchTerm, setSearchTerm] = useState('');
	
	  // В реальном приложении, эти данные будут получены с бэкенда через API
	  useEffect(() => {
	    // Имитация загрузки данных
	    const mockProducts = [
	      { id: 1, imageUrl: Product1, title: 'Вентилятор YWF-4-E', description: 'Высокоэффективный осевой вентилятор для промышленных применений.', fullDescription: 'Производится из высокоэффективного сырья по новейшим разработкам и на основе высококачественного сырья', link: '/products/1' },
	      { id: 2, imageUrl: Product2, title: 'Воздуховод гибкий', description: 'Гибкие воздуховоды из ПВХ, армированные спиралью.', link: '/products/2' },
	      { id: 3, imageUrl: Product3, title: 'Система фильтрации воздуха', description: 'Комплексные решения для очистки воздуха в помещениях.', link: '/products/3' },
	      { id: 4, imageUrl: Product4, title: 'Рекуператор тепла', description: 'Энергоэффективные решения для вентиляции с рекуперацией тепла.', link: '/products/4' },
	      { id: 5, imageUrl: Product5, title: 'Приточная установка', description: 'Современные приточные установки для создания комфортного микроклимата.', link: '/products/5' },
	      { id: 6, imageUrl: Product6, title: 'Шкаф управления вентиляцией', description: 'Автоматизированные системы управления для вентиляционных установок.', link: '/products/6' },
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
	                  imageUrl={product.imageUrl}
	                  title={product.title}
	                  description={product.description}
					  fullDescription={product.fullDescription}
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
