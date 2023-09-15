import React, { useContext, useEffect, useState } from "react";
import "./basket.css";
import BasketItem from "../components/basketItem";
import { getBasket, removeFromBasket } from "../APIcalls";
import importAllImages from "../images/allImages";
import { UserContext } from "../UserContext";

export default function Basket() {
  const [basket, setBasket] = useState([]);
  const { user } = useContext(UserContext);
  const allImages = importAllImages(require.context('../images/products', false, /\.(png)$/));

  useEffect(() => {
    async function setData() {
      const data = await getBasket(user.id);
      setBasket(data);
    }
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function removeFromBasketAndUpdate(cid, pid){
        await removeFromBasket(cid, pid);
        const data = await getBasket(user.id);

      setBasket(data);
  }

  function calculateTotal(){
    var sumTotal = basket.reduce(
      (total, currentValue) => (total = total + currentValue.price),
      0
    );
    return sumTotal;
  }

  return (
    <>
      <section className="basket-container">
        <div className="basket">
          <div className="basketList" id="parent">
            <ul id="productList">
              {basket.map((product) => (
                  <BasketItem
                    key={product.id}
                    name={product.title}
                    size={product.size}
                    price={product.price}
                    image={allImages[product.image]}
                    pid={product.id}
                    cid={user.id}
                    button={
                      <button
                        className="cartRemove"
                        onClick={() => removeFromBasketAndUpdate(user.id, product.id)}
                      >
                        X
                      </button>
                    }
                  />
              ))}
            </ul>
          </div>

          <div className="orderDetails">
            <h2>Confirm your order</h2>
            <div id="infoForm">
              <h3 id="loginPrompt">
                To save details about this and future orders, be sure you log-in
              </h3>
              <hr id="topLine" />
              <h3 className="sum left">Cost of order:</h3>
              <h3 className="sum right itemsTotal">{calculateTotal()} DKK</h3>
              <h3 className="sum left">Shipping:</h3>
              <h3 className="sum right shipping">
                {calculateTotal() >= 500 ? "FREE" : "45 DKK"}
              </h3>
              <hr id="bottomLine" />
              <h2 className="sum left">Total cost:</h2>
              <h2 className="sum right orderTotal">
                {calculateTotal() >= 500 ? calculateTotal() + " DKK" : calculateTotal() + 45 + " DKK"}
              </h2>
              <h5>Free shipping on orders over 500 DKK</h5>
              <button className="purchase-button">PURCHASE</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}