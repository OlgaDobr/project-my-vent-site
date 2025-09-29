import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import './Card.css'; // Ваши стили для карточек
	
	function Card({ imageUrl, title, description, link }) {
	  return (
	    <BootstrapCard className="custom-card">
	      <BootstrapCard.Img variant="top" src={imageUrl} alt={title} />
	      <BootstrapCard.Body>
	        <BootstrapCard.Title>{title}</BootstrapCard.Title>
	        <BootstrapCard.Text>{description}</BootstrapCard.Text>
	        {link && (
	          <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
	            Подробнее
	          </Button>
	        )}
	      </BootstrapCard.Body>
	    </BootstrapCard>
	  );
	}
	
	export default Card;
