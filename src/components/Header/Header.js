import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; // Ваши стили для хедера
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
                        	            <Nav.Link as={Link} to="/">Главная</Nav.Link>
                        	            <Nav.Link as={Link} to="/about">О нас</Nav.Link>
                        	            <Nav.Link as={Link} to="/services">Услуги</Nav.Link>
                        	            <Nav.Link as={Link} to="/products">Продукты</Nav.Link>
                        	            <Nav.Link as={Link} to="/contact">Контакты</Nav.Link>
                                        <Nav.Link as={Link} to="/carousel">Наши объекты</Nav.Link>
                        	          </Nav>
                    	        </Navbar.Collapse>
                	      </Container>
            	    </Navbar>
	  );

}
	
	export default Header;
