import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from '../../assets/img/logo.png';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary custom-header">
            <Container>
                <Navbar.Brand as={Link} to="/">
                
                    <img
                        src = {logo} // Путь к вашему логотипу
                        width="90"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Логотип компании"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    	          <Nav className="me-auto">
                        	            <Link to="/" className="nav-link">{("Главная")}</Link>
                                        <Link to="/about" className="nav-link">{("О нас")}</Link>
                                        <Link to="/services" className="nav-link">{("Услуги")}</Link>
                                        <Link to="/products" className="nav-link">{("Продукты")}</Link>
                                        <Link to="/contact" className="nav-link">{("Контакты")}</Link>
                                        <Link to="/carousel" className="nav-link">{("Наши объекты")}</Link>
                                        <Link to="/orders" className="nav-link">{("Заказы")}</Link>
                                        <Link to="/orderItems" className="nav-link">{("Детали заказа")}</Link>

                        	          </Nav>
                    	        </Navbar.Collapse>
                	      </Container>
            	    </Navbar>
	  );

}
	
	export default Header;


    
        <Link to="/rating" className="nav-link">{("Рейтинг")}</Link>