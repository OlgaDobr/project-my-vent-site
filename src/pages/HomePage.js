import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Section from '../components/Section/Section';
import Card from '../components/Card/Card';
import './HomePage.css'; 
import img1 from '../assets/img home/img1.jpeg';
import img2 from '../assets/img home/img2.jpeg';
import img3 from '../assets/img home/img3.jpeg';
import img4 from '../assets/img home/img4.jpg';
import img5 from '../assets/img home/img5.jpeg';
import img6 from '../assets/img home/img6.jpeg';
import Онас from "../assets/img/О нас.jpeg";
import ProductCard from '../components/ProductCard/ProductCard';

	
	function HomePage() {
	  // Пример данных (в реальном приложении будут получены с бэкенда)
	  const featuredProducts = [
	    { id: 1, imageUrl: img1, title: 'Вентилятор', description: 'Высокоэффективный осевой вентилятор для промышленных применений.', fullDescription: 'Применяется как в промышленных цехах, так и в небольших помещениях, имеет высокую мощность', link: '#' },
	    { id: 2, imageUrl: img2, title: 'Воздуховод гибкий', description: 'Гибкие воздуховоды из ПВХ, армированные спиралью.', fullDescription: 'Применяется практически во всех видах установки приточно-вытяжной вентиляции',link: '#' },
	    { id: 3, imageUrl: img3, title: 'Система фильтрации воздуха', description: 'Комплексные решения для очистки воздуха в помещениях.', fullDescription: 'Фильтрация воздуха новейшим оборудованием', link: '#' },
		{ id: 4, imageUrl: img4, title: 'Вентиляция в бизнес центрах', description: 'Высокоэффективное оборудование и самые высококвалифицированные специалисты', fullDescription: 'Обширные проекты, направленные на длительную эксплуатацию и надежные решения',link: '#' },
		{ id: 5, imageUrl: img5, title: 'Вентиляция офисных помещений', description: 'Простые и эффективные решения для чистого и свежего воздуха для рабочей атмосферы', fullDescription: 'Установка новейшего высокоэкологичного оборудования, которым невероятно удобно пользоваться обычным людям, находящимся на работе',link: '#' },
		{ id: 6, imageUrl: img6, title: 'Кондиционировние на промышленных объектах', description: 'Мощнейшие приточные установки, профессиональный подход в промышленных масштабах',fullDescription: 'Специалисты высокого профиля создают мощнейшие системы охлаждения воздуха, позволяющие охватить большие площади и нагрузку',link: '#' },
	  ];
	  
	
	  return (
	    <div>
	      {/* Hero Section */}
	      <section className="hero-section text-center text-white py-5">
	        <Container>
	          <h1 className="display-4 mb-3">Профессиональные Системы Вентиляции</h1>
	          <p className="lead mb-4">Надежные решения для создания комфортного микроклимата.</p>
	          <Button variant="primary" size="lg" href="/services">Наши Услуги</Button>
	        </Container>
	      </section>
	
	      {/* About Us Snippet */}
	      <Section title="Почему выбирают нас?">
	        <Row className="align-items-center">
	          <Col md={6}>
	            <p>Мы предлагаем полный спектр услуг по проектированию, монтажу и обслуживанию систем вентиляции. 
					Наша команда экспертов гарантирует высокое качество и индивидуальный подход к каждому клиенту.
					За этот длинный промежуток времени, успели попробовать свои силы в создании правильного климата 
					и воздухораспределения от частных домов, офисных помещений и небольших кафе, до обслуживания сети 
					ресторанов и реализации промышленной вентиляции. Это позволило нам вырасти и предлагать Вам качественно 
					выполненные системы любой сложности и в срок.
                    Наша миссия – разрабатывать и запускать проекты, способные показать Вам, 
		            правильный подход к созданию комфортного климата.
                    Сегодня наши услуги подходят, как для жилых помещений, так и производственным предприятиям. 
					При разработке технического решения систем вентиляции и кондиционирования, мы учитываем все 
					пожелания, соблюдая требования и нормы.</p>
	            <Button variant="outline-primary" href="/about">Узнать больше</Button>
	          </Col>
	          <Col md={6}>
			  <h3>О нас</h3>
	            <img src={Онас}
				padding="45"
				margin="100"
				width="500px"
				height="300px"
				
				alt="О нас" className="img-fluid rounded" />
	          </Col>
	        </Row>
	      </Section>
	
	      {/* Featured Products */}
	      <Section title="Популярные Решения">
	        <Row>
	          {featuredProducts.map(product => (
	            <Col key={product.id} md={4} className="mb-4">
	              <Card
	                imageUrl={product.imageUrl}
	                title={product.title}
	                fullDescription={product.fullDescription}
					description={product.description}
	                link={product.link}
	              />

				  
	            </Col>
	          ))}
	        </Row>
	      </Section>
	
	      {/* Call to Action */}
	      <section className="cta-section bg-light py-5 text-center">
	        <Container>
	          <h2>Готовы улучшить ваш микроклимат?</h2>
	          <p className="mb-4">Свяжитесь с нами для бесплатной консультации и расчета.</p>
	          <Button variant="success" size="lg" href="/contact">Заказать консультацию</Button>


			  
	        </Container>
	      </section>
	    </div>
	  );
	}
	
	export default HomePage;
