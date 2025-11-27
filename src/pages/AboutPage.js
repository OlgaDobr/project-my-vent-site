import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../components/Section/Section';
import './AboutPage.css'; // Стили 
import Нашакоманда from "../assets/img/images (1).jpeg";
import Нашофис from "../assets/img/images (3).jpeg";
import Нашиценности from "../assets/img/Без названия (4).jpeg";
import ventvideo from "../assets/ventvideo.MP4";
import ventvideo2 from "../assets/ventvideo2.MP4";

	
	function AboutPage() {
	  return (
	    <div>
			<Container>
	      <Section title="О Нас">
	        <p>Наша компания является лидером в области поставок и монтажа современных систем вентиляции и кондиционирования. Мы работаем на рынке уже более 10 лет, зарекомендовав себя как надежный партнер.</p>
	        <p>Наша миссия — создавать здоровое и комфортное пространство для жизни и работы наших клиентов, используя передовые технологии и высококачественное оборудование.</p>
			<p>Этапы выполнения работ на Вашем объекте: 
1. Подбор оптимального варианта комплектации оборудования под ваши потребности и цели 
2. Создание проектного расположения узлов системы и подробного описания работ
3. Поставка оборудования и материалов до объекта
4. Монтаж систем силами собственного штата обученных специалистов
5. Испытание системы в различных режимах и отладка всего оборудования
6. Гарантийное и постгарантийное техническое обслуживание</p>
	
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
	            <h4>Описание видео</h4>
          <p>
            Это описание вашего видео.  Расскажите, о чем оно, какие ключевые моменты затрагивает, и почему его стоит посмотреть. Вы можете добавить больше деталей и использовать HTML-теги для форматирования.
          </p>
                      <a href="#" className="btn btn-primary" >Подробнее</a>
	          </Col>
	          <Col md={6}>
	                     <video width="30%" heigh="50%" controls>
			<source src={ventvideo}
            alt="ventvideo" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
	          </Col>
	        </Row>


			 <Row className="mt-5">
	          <Col md={6}>
	            <h4>Описание видео</h4>
          <p>
            Это описание вашего видео.  Расскажите, о чем оно, какие ключевые моменты затрагивает, и почему его стоит посмотреть. Вы можете добавить больше деталей и использовать HTML-теги для форматирования.
          </p>
                      <a href="#" className="btn btn-primary" >Подробнее</a>
	          </Col>
	          <Col md={6}>
	                     <video width="60%" heigh="50%" controls>
			<source src={ventvideo2}
            alt="ventvideo2" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
