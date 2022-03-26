import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Wishlist from '../Wishlist/Wishlist';

const CalligraphyShop = () => {
    // get products data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('calligraphy.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // wishlist
    const [selectedItems, setSelectedItems] = useState([])
    const wishlist = id => {
        const selectedTotalItem = [];
        const selectedProduct = products.find(product => product.id === id);
        selectedTotalItem.push(...selectedItems, selectedProduct);
        setSelectedItems(selectedTotalItem);
    }

    // choose 1 for me
    const [randomlySelectedItem, setRandomlySelectedItem] = useState([]);
    const randomSelection = () => {
        const randomNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);

        const randomlySelected = selectedItems.find(product => product.id === randomNumber);
        if (!randomlySelected) {
            randomSelection();
        } else (setRandomlySelectedItem(randomlySelected));
    }
    // choose again
    const clearingWishlist = () => {
        setRandomlySelectedItem([]);
        setSelectedItems([]);
    }

    return (
        <section className='main-container'>
            <div className="products-container">
                {products.map(product => <Products key={product.id} product={product} wishlist={wishlist}></Products>)}
            </div>
            <aside>
                <Wishlist selectedItem={selectedItems}></Wishlist>
                <h4>We recommend you: <h1 className='recomended-item'>{randomlySelectedItem.name}</h1></h4>
                <button onClick={randomSelection} className="random-btn">Choose 1 for me</button>
                <button onClick={clearingWishlist} className="choose-again-btn">Choose Again</button>
            </aside>
        </section>
    );
};

export default CalligraphyShop;