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

    return (
        <section className='main-container'>
            <div className="products-container">
                {products.map(product => <Products key={product.id} product={product} wishlist={wishlist}></Products>)}
            </div>
            <aside>
                <Wishlist selectedItem={selectedItems}></Wishlist>
            </aside>
        </section>
    );
};

export default CalligraphyShop;