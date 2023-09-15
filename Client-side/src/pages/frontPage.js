import React from "react";
import './frontPage.css'
import saleImage from '../images/products/12_product.png';
import WhiteButton from "../components/whiteButton";
import { Link } from "react-router-dom";

export default function Frontpage(){

    return(
        <>
            <section className="frontpage-container">
                <Link to="/productoverview" state= {{category: "women", type: "empty"}}>
                    <WhiteButton 
                        text="Shop Women"/>
                </Link>
                
                <Link to="/productoverview" state= {{category: "men", type: "empty"}}>
                    <WhiteButton
                        text="Shop Men"/>
                </Link>
            </section>

            <section className="sale-container">
                <div className="sale-col">
                  <img src={saleImage} alt="Sale product"></img>
                </div>

                <div className="sale-col">
                    <h3>MID SEASON SALE</h3>
                    <h4>Save up to 70%</h4>
                    Get ready to great offers and discounts, when CLOTHES SHOP invites 
                    to Mid Season Sale with our most fashionable products. 
                    <br/> <br/>

                    <div className="sale-buttons">
                        <Link to="/productoverview" state= {{category: "women", type: "empty"}}>
                            <WhiteButton 
                                text="Shop Women"/>
                        </Link>
                        <Link to="/productoverview" state= {{category: "men", type: "empty"}}>
                            <WhiteButton
                                text="Shop Men"/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}