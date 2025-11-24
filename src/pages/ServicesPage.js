import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Section from '../components/Section/Section';
import './ServicesPage.css'; 
import Проектированиесистемвентиляции from '../assets/img service/Проектирование систем вентиляции.jpeg';
import Монтажиустановка from '../assets/img service/Монтаж и установка.jpeg';
import Обслуживаниеиремонт from '../assets/img service/Обслуживание и ремонт.jpeg';
import Поставкаоборудования from '../assets/img service/Поставка оборудования.jpeg';
	
	function ServicesPage() {
	  const services = [
	    { id: 1, title: 'Проектирование систем вентиляции', description: 'Разработка индивидуальных проектов с учетом всех требований и особенностей объекта.', imageUrl: '../assets/img service/Проектирование систем вентиляции.jpeg'},
	    { id: 2, title: 'Монтаж и установка', description: 'Профессиональный монтаж вентиляционного оборудования любой сложности.', imageUrl: '../assets/img service/Монтаж и установка.jpeg'},
	    { id: 3, title: 'Обслуживание и ремонт', description: 'Регулярное техническое обслуживание для обеспечения бесперебойной работы систем.', imageUrl: '/images/service-maintenance.jpg' },
	    { id: 4, title: 'Поставка оборудования', description: 'Широкий ассортимент вентиляционного оборудования от ведущих производителей.', imageUrl: '/images/service-supply.jpg' },
	  ];
	

	  

	  
	  return (
	    <div>
		<Container>
	      <Section title="Наши Услуги">
	        <p className="text-center mb-5">Мы предлагаем полный комплекс услуг для обеспечения оптимального микроклимата в ваших помещениях.</p>
	        <Row>
	          {services.map(service => (
	            <Col key={service.id} md={6} lg={3} className="mb-4">
	              <Card className="h-100">
	                <Card.Img variant="top" src={Проектированиесистемвентиляции}/>
					 <Card.Img variant="top" src={Монтажиустановка}/>
	                <Card.Body>
						{/* <Card.id>{id}</Card.id> */}
	                  <Card.Title>{service.title}</Card.Title>
	                  <Card.Text>{service.description}</Card.Text>
	                </Card.Body>
	              </Card>
	            </Col>
	          ))}
	        </Row>
	      </Section>
		  </Container>
	    </div>
	  );
	}
	
	export default ServicesPage;
