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
		{ id: 5, title: 'Выезд на объект, рaсчеты и замеры', description: 'Работают профессионалы с большим опытом, все расчеты выполняются со 100% точностью ', imageUrl: service5 },
		{ id: 6, title: 'Выполнение сантехнических работ под ключ', description: 'Полный спектр сантехнических работ любой сложности за короткие сроки с гарантией', imageUrl: service6 },
		{ id: 7, title: 'Сервисное обслуживание инженерных систем', description: 'Обслуживание систем с выездом специалиста на объект по договоренности', imageUrl: service7 },
		{ id: 8, title: 'Разрабатываем проекты для любых типов объектов', description: 'Разработка проектов любой сложности и объема, сопровождение от начала проекта до реализации планового результата', imageUrl: service8 },
	  ];
	

	  

	  
	  return (
	    <div>
		<Container>
	      <Section title="Наши Услуги">
	        <p className="text-center mb-5">Мы предлагаем полный комплекс услуг для обеспечения оптимального микроклимата в ваших помещениях.
				Мы осуществляем полный цикл услуг от проектирования до ввода в эксплуатацию и последующего сервисного обслуживания систем кондиционирования. 
				Наши специалисты помогут в выборе кондиционера, вентиляции и другой климатической техники. Мы создаем рабочие проекты вентиляции, кондиционирования для любых помещений: квартиры, 
				дома, офисы, кафе, рестораны, ТЦ, фитнес-центры, магазины, аптеки и т.д. Имеем допуск СРО, проектируем системы вентиляции в соответствии со СНИП и пожеланиями заказчика. 
				Соблюдаем эргономику и эстетику в помещении.
			</p>
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
