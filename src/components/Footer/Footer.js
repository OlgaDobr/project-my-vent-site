import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Ваши стили для футера

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="custom-footer py-4 mt-5">
            <Container>
                <Row>
                    <Col md={4} className="mb-3">
                        <h5>О компании</h5>
                        <p>Разрабатываем проекты для любых типов объектов. Подбор оптимального варианта комплектации оборудования под ваши потребности и цели
                    Создание проектного расположения узлов системы и подробного описания работ
                 Поставка оборудования и материалов до объекта
                 Монтаж систем силами собственного штата обученных специалистов
                 Испытание системы в различных режимах и отладка всего оборудования
                        </p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Навигация</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Главная</a></li>
                            <li><a href="/about">О нас</a></li>
                            <li><a href="/services">Услуги</a></li>
                            <li><a href="/contact">Контакты</a></li>
                            <li><a href="/privacypolicy">Политика конфиденциальности</a></li>
                            
                            
                        </ul>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Контакты</h5>
                        <p>
                            <i className="fas fa-map-marker-alt me-2"></i>
                            г. Москва, ул. Примерная, д. 1
                        </p>
                        <p><i className="fas fa-phone me-2"></i> +7 (495) 123-45-67</p>
                        <p><i className="fas fa-envelope me-2"></i> info@ventindusty.com</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">&copy; {currentYear} ООО "Вентиндустрия". Системы вентиляции и кондиционирования.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;
