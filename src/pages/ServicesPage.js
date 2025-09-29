import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Section from '../components/Section/Section';
//import Безназвания2 from '../src/assets/img/Без названия 2.jpeg';
	
	function ServicesPage() {
	  const services = [
	    { id: 1, title: 'Проектирование систем вентиляции', description: 'Разработка индивидуальных проектов с учетом всех требований и особенностей объекта.', imageUrl: '/src/assets/img/Без названия 2.jpeg' },
	    { id: 2, title: 'Монтаж и установка', description: 'Профессиональный монтаж вентиляционного оборудования любой сложности.', imageUrl: '/images/service-montage.jpg' },
	    { id: 3, title: 'Обслуживание и ремонт', description: 'Регулярное техническое обслуживание для обеспечения бесперебойной работы систем.', imageUrl: '/images/service-maintenance.jpg' },
	    { id: 4, title: 'Поставка оборудования', description: 'Широкий ассортимент вентиляционного оборудования от ведущих производителей.', imageUrl: '/images/service-supply.jpg' },
	  ];
	
	  return (
	    <div>
	      <Section title="Наши Услуги">
	        <p className="text-center mb-5">Мы предлагаем полный комплекс услуг для обеспечения оптимального микроклимата в ваших помещениях.</p>
	        <Row>
	          {services.map(service => (
	            <Col key={service.id} md={6} lg={3} className="mb-4">
	              <Card className="h-100">
	                <Card.Img variant="top" src={service.imageUrl} />
	                <Card.Body>
	                  <Card.Title>{service.title}</Card.Title>
	                  <Card.Text>{service.description}</Card.Text>
	                </Card.Body>
	              </Card>
	            </Col>
	          ))}
	        </Row>
	      </Section>
	    </div>
	  );
	}
	
	export default ServicesPage;
