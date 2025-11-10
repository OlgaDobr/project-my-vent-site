import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../components/Section/Section';
import './AboutPage.css'; // Стили 
import Нашакоманда from "../assets/img/images (1).jpeg";
import Нашофис from "../assets/img/images (3).jpeg";
import Нашиценности from "../assets/img/Без названия (4).jpeg";

	
	function AboutPage() {
	  return (
	    <div>
			<Container>
	      <Section title="О Нас">
	        <p>Наша компания является лидером в области поставок и монтажа современных систем вентиляции и кондиционирования. Мы работаем на рынке уже более 10 лет, зарекомендовав себя как надежный партнер.</p>
	        <p>Наша миссия — создавать здоровое и комфортное пространство для жизни и работы наших клиентов, используя передовые технологии и высококачественное оборудование.</p>
	
	        <Row className="mt-5">
	          <Col md={6}>
	            <h3>Наша Команда</h3>
	            <p>Мы гордимся нашей командой профессионалов, которая состоит из опытных инженеров, монтажников и консультантов. Каждый сотрудник прошел строгий отбор и постоянно повышает свою квалификацию.</p>
	          </Col>
	          <Col md={6}>
	            <img src={Нашакоманда} 
				alt="Наша команда" className="img-fluid rounded" />
	          </Col>
	        </Row>
	
	        <Row className="mt-5">
	          <Col md={6}>
			  <h3>Наш офис</h3>
	            <img src={Нашофис} 
				alt="Наш офис" className="img-fluid rounded" />
	          </Col>
	          <Col md={6}>
	            <h3>Наши Ценности</h3>
				<img src={Нашиценности} 
				alt="Наши ценности" className="img-fluid rounded" />
	            <ul>
	              <li><strong>Качество:</strong> Мы гарантируем высокое качество всех наших работ.</li>
	              <li><strong>Надежность:</strong> Выбираем только проверенное оборудование.</li>
	              <li><strong>Инновации:</strong> Внедряем новейшие технологии.</li>
	              <li><strong>Клиентоориентированность:</strong> Всегда ставим потребности клиента на первое место.</li>
	            </ul>
	          </Col>
	        </Row>
	      </Section>
		  </Container>
	    </div>
	  );
	}
	
	export default AboutPage;
