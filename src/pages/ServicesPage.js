import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Section from '../components/Section/Section';
import './ServicesPage.css'; 
import service1 from '../assets/img service/service1.jpeg';
import service2 from '../assets/img service/service2.jpeg';
import service3 from '../assets/img service/service3.jpeg';
import service4 from '../assets/img service/service4.jpeg';
import service5 from '../assets/img service/service5.jpeg';
import service6 from '../assets/img service/service6.jpeg';
import service7 from '../assets/img service/service7.jpeg';
import service8 from '../assets/img service/service8.jpg';
	
	function ServicesPage() {
	  const services = [
	    { id: 1, title: 'Проектирование систем вентиляции', description: 'Разработка индивидуальных проектов с учетом всех требований и особенностей объекта.', imageUrl: service1},
	    { id: 2, title: 'Монтаж и установка', description: 'Профессиональный монтаж вентиляционного оборудования любой сложности.', imageUrl: service2},
	    { id: 3, title: 'Обслуживание и ремонт', description: 'Регулярное техническое обслуживание для обеспечения бесперебойной работы систем.', imageUrl: service3},
	    { id: 4, title: 'Поставка оборудования', description: 'Широкий ассортимент вентиляционного оборудования от ведущих производителей.', imageUrl: service4 },
		{ id: 5, title: 'Выезд на объект, рсчеты и замеры', description: 'Широкий ассортимент вентиляционного оборудования от ведущих производителей.', imageUrl: service5 },
		{ id: 6, title: 'Выполнение сантехнических работ под ключ', description: 'Широкий ассортимент вентиляционного оборудования от ведущих производителей.', imageUrl: service6 },
		{ id: 7, title: 'Сервисное обслуживание инженерных систем', description: 'Широкий ассортимент вентиляционного оборудования от ведущих производителей.', imageUrl: service7 },
		{ id: 8, title: 'Разрабатываем проекты для любых типов объектов', description: 'Широкий ассортимент вентиляционного оборудования от ведущих производителей.', imageUrl: service8 },
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
	                <Card.Img variant="top" src={service.imageUrl}/>
					
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
