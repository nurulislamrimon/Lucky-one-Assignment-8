import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Products = props => {
    const { id, name, price, picture } = props.product;
    return (
        <div className="card">
            <div className='product-details'>
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
            </div>
            <button onClick={() => props.wishlist(id)} className='center'>
                <p>Wishlist</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;