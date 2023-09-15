import React, { useContext, useState, useEffect } from 'react';
import "./productPage.css";
import "../globalStyles.css";
import BlackButton from '../components/blackButton';
import { getProductById, addToBasket } from "../APIcalls";
import { useLocation } from 'react-router-dom';
import importAllImages from '../images/allImages';
import { UserContext } from "../UserContext";

export default function ProductPage() {
    const { user } = useContext(UserContext);
    const location = useLocation();
    const { productID } = location.state;

    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function setProductById() {
            const data = await getProductById(JSON.stringify(productID.id));
            setProduct(data);
        }
        setProductById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const images = importAllImages(require.context('../images/products', false, /\.(png)$/));

    function addToCart(event){
        event.preventDefault();
        if(user.auth === true){
            addToBasket(user.id, JSON.stringify(productID.id));
            alert("Your item has been added to your basket");
        }
        else{
            addToBasket(0, JSON.stringify(productID.id));
            alert("Your item has been added to your basket");
        }
    }

    return(
        <>
        <div className='container-grid-product'>
            <div className='left-image'>
                <img src={ images[product.image] } alt="product" className='img-fluid'></img>
            </div>

            <div className='right-description'>
                <h1 id="productTitle">{product.title}</h1>
                <h2 id="productPrice">{product.price} DKK</h2>
                
                <BlackButton
                onClick={addToCart}
                text="Add to cart"></BlackButton>
            </div>

        </div> 

        <div className='bottom-description'>
            <div id="description">
                <h2>Description</h2>
                <p>{product.description}</p>
            </div>
            <div className="composition">
                <h3>Material composition</h3>
                <p>[Black] 70% Cotton, 20% Polyester, 9% Lyocell, 1% Elastane </p>
                <p>[Other Colors] 82% Cotton, 9% Lyocell, 8% Elastomultiester, 1% Elastane</p>
                <p><b>Care Instructions:</b></p>
                <p>Machine wash up to 40 degrees, gentle cycle</p>
            </div>
            <div className="size">
                <h3>Size information</h3>
                <p>This product is available in a selection of leg lengths. Please refer to the 'inseam' measurement on the
                    product size chart to find your perfect size. This product is made according to men’s size guidelines.
                    For women’s sizing, we recommend purchasing either 1 or 2 sizes smaller than your usual size.</p>
            </div>
        </div>
        </>
    );
}