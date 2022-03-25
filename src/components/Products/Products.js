import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Products = props => {
    const { name, price, picture } = props.product;
    return (
        <div className="product-container">
            <div className='product'>
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
            </div>
            <button className='center'>
                <p>Wishlist</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;