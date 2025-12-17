import React from 'react';
import { Button } from 'react-bootstrap';
import ProductsPage from '../../pages/ProductsPage';

const BuyButton = ({ product, addToCart }) => {
    return (
        <Button 
            variant="primary" 
            onClick={() => addToCart(product)}
        >
            Купить
        </Button>
    );
};

export default BuyButton;
