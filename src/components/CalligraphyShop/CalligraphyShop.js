import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const CalligraphyShop = () => {
    // get products data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('calligraphy.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section className='main-container'>
            <div className="products-container">
                {products.map(product => <Products key={product.id} product={product}></Products>)}
            </div>
            <aside>
                <h1>hello</h1>
            </aside>
        </section>
    );
};

export default CalligraphyShop;