import React from 'react';

const Wishlist = props => {
    const { name } = props.selectedItem;
    return (
        <div>
            <h1>Wishlist:</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default Wishlist;