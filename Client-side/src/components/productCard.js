import React, { useContext } from 'react';
import "./productCard.css";
import { Card } from 'react-bootstrap';
import BlackButton from './blackButton';
import { Link } from "react-router-dom";
import importAllImages from '../images/allImages';
import { UserContext } from "../UserContext";
import { addToBasket } from '../APIcalls';

export default function ProductCard ({ id, image, title, price }) {
    const { user } = useContext(UserContext);

    function addToCart(event){
        event.preventDefault();
        if(user.auth === true){
            addToBasket(user.id, id);
            alert("Your item has been added to your basket");
        }
        else{
            addToBasket(0, id);
            alert("Your item has been added to your basket");
        }
    }

    const images = importAllImages(require.context('../images/products', false, /\.(png)$/));

    return(
        <Card style={{ width: '14rem', margin: '1%' }}>
            <Link to="/productpage" state= {{productID: {id}}}>
                <Card.Img variant="top" src={images[image]} />
            </Link>
            <Card.Body>
                <Card.Text>{title} </Card.Text>
                <Card.Text>{price} DKK</Card.Text>
                    <BlackButton
                        onClick={addToCart}
                        text ="Add to cart"/>
            </Card.Body>
        </Card>
    );
}