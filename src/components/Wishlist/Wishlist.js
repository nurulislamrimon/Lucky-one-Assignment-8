import React from 'react';

const Wishlist = props => {
    return (
        <div>
            <h1>Wishlist:</h1>
            {props.selectedItem.map(product => <DisplayWishlist key={product.id} product={product}></DisplayWishlist>)}
        </div>
    );
};

const DisplayWishlist = props => {
    const { name, picture } = props.product;
    return (
        <div className='selected-item'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
        </div>
    )
}

export default Wishlist;