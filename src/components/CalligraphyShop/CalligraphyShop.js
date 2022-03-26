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
        /*         const randomlySelected = selectedItems[randomNumber];
                if (randomNumber > selectedItems.length) {
                    randomSelection();
                } else (setRandomlySelectedItem(randomlySelected)); */
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
                <h4>We recommend you: </h4>
                <div className='selected-item'>
                    <img src={randomlySelectedItem.picture} alt="" />
                    <h1>{randomlySelectedItem.name}</h1>
                </div>
                <button onClick={randomSelection} className="random-btn">Choose 1 for me</button>
                <button onClick={clearingWishlist} className="choose-again-btn">Choose Again</button>
            </aside>
            <article>
                <details>
                    <summary>What are the defference between 'Props' and 'State'?</summary>
                    <p>Props used for passing data down for view control but State used for manage data in view controll. Props are immutable but state are mutable. props has better performance but the performance of the state is worst. You can use data in child components by using props but it's impossible to access data from child components. Finally, Props are use to manage externel components and state used for internel components.</p>
                </details>
                <details>
                    <summary>How react works?</summary>
                    <p>hello</p>
                </details>
            </article>
        </section>
    );
};

export default CalligraphyShop;