import React from 'react';
import productsData from '.src/Data/productData';
import ProductsCard from './components/ProductsCard';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

