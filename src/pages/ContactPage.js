import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Section from '../components/Section/Section';
	
	function ContactPage() {
	  // В реальном приложении, здесь будет обработка отправки формы
	  const handleSubmit = (event) => {
	    event.preventDefault();
	    alert('Форма отправлена! Спасибо!');
	    // Здесь будет логика отправки данных на бэкенд
	  };
	
	  return (
	    <div>
	      <Section title="Свяжитесь с нами">
	        <Row>
	          <Col md={6}>
	            <h3>Наши Контакты</h3>
	            <p>
	              <i className="fas fa-map-marker-alt me-2"></i>
	              <strong>Адрес:</strong> г. Красндар, ул. Примерная, д. 1
	            </p>
	            <p>
	              <i className="fas fa-phone me-2"></i>
	              <strong>Телефон:</strong> +7 (495) 123-45-67
	            </p>
	            <p>
	              <i className="fas fa-envelope me-2"></i>
	              <strong>Email:</strong> info@yourcompany.com
	            </p>
	            <p>
	              <i className="fas fa-clock me-2"></i>
	              <strong>Режим работы:</strong> Пн-Пт, 9:00 - 18:00
	            </p>
	            {/* Интеграция карты (например, Google Maps или Яндекс.Карты) */}
	            <div className="map-container mt-4">
	              <iframe
	                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.8583166880963!2d37.61731191050201!3d55.75582608313546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a7410353293%3A0x445a5a4c8e8a4a4!2sRed%20Square%2C%20Moscow%2C%20Russia!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
	                width="100%"
                    height="300"
	                style={{ border: 0 }}
	                allowFullScreen=""
	                loading="lazy"
	                referrerPolicy="no-referrer-when-downgrade"
	                title="Карта с нашим офисом"
	              ></iframe>
	            </div>
	          </Col>
	          <Col md={6}>
	            <h3>Форма обратной связи</h3>
	            <Form onSubmit={handleSubmit}>
	              <Form.Group className="mb-3" controlId="formBasicName">
	                <Form.Label>Ваше имя</Form.Label>
	                <Form.Control type="text" placeholder="Введите ваше имя" required />
	              </Form.Group>
	
	              <Form.Group className="mb-3" controlId="formBasicEmail">
	                <Form.Label>Email</Form.Label>
	                <Form.Control type="email" placeholder="Введите ваш email" required />
	              </Form.Group>
	
	              <Form.Group className="mb-3" controlId="formBasicPhone">
	                <Form.Label>Телефон</Form.Label>
	                <Form.Control type="tel" placeholder="Введите ваш телефон" />
	              </Form.Group>
	
	              <Form.Group className="mb-3" controlId="formBasicMessage">
	                <Form.Label>Сообщение</Form.Label>
	                <Form.Control as="textarea" rows={3} placeholder="Ваше сообщение" required />
	              </Form.Group>
	
	              <Button variant="primary" type="submit">
	                Отправить
	              </Button>
	            </Form>
	          </Col>
	        </Row>
	      </Section>
	    </div>
	  );
	}
	
	export default ContactPage;
