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
    const { name } = props.product;
    return (
        <div>
            <h1>{name}</h1>
            {/* <img src={picture} height="100" alt="" /> */}
        </div>
    )
}

export default Wishlist;