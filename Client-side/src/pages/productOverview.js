import React, { useState, useEffect } from 'react';
import "./productOverview.css";
import ProductCard from '../components/productCard';
import { useLocation } from 'react-router-dom';
import { getProductsByCategory, getProductsByCategoryAndType } from "../APIcalls";

export default function ProductOverview () {
    const location = useLocation();
    const { category, type } = location.state;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(type === "empty"){
            async function setProductsByCategory() {
                const data = await getProductsByCategory(category);
                setProducts(data);
            }
            setProductsByCategory();
        }
        else{
            async function setProductsByCategoryAndType() {
                const data = await getProductsByCategoryAndType(category, type);
                setProducts(data);
            }
            setProductsByCategoryAndType();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, type]);

    return(
        <div className='products-overview'>
            {products.map((product) => (
                <ProductCard key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </div>
    );
}