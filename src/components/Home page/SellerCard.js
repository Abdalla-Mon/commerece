import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
let xArr = [];
let cartMap = {};
let cartArr = [];
export function Card({ arr, cont, clas, s = "" }) {
  //handle click

  let [added, addToCart] = useState(false);

  function handlingClick() {
    if (window.localStorage.getItem("selected") !== null) {
      if (
        window.localStorage.getItem("cartArr") !== null &&
        window.localStorage.getItem("cartArr") !== "[]"
      ) {
        cartMap = JSON.parse(window.localStorage.getItem("cartArr"))[0];
      }
      cartMap[window.localStorage.getItem("selected")] = 1;

      if (cartArr.includes(cartMap) === false) {
        cartArr = [cartMap];
      }
      window.localStorage.setItem("cartArr", JSON.stringify(cartArr));
      window.localStorage.setItem("nums", Object.keys(cartArr[0]).length || 0);
      addToCart(true);
    }
    if (window.localStorage.getItem("nums") !== null) {
      document.querySelectorAll(".cart-counter").forEach((e) => {
        e.innerHTML = window.localStorage.getItem("nums");
      });
    }
  }
  useEffect(() => {
    const intervalId = setTimeout(() => {
      addToCart(false);
    }, 3700);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={clas} id={arr.id}>
      <div className="card">
        <div className="img-container">
          <a href={"/products/" + arr.title}>
            {" "}
            <img
              onClick={() => {
                xArr.length = 0;
                window.localStorage.setItem("selected", arr.id);
                return xArr.push(arr.id);
              }}
              className="card-img-top"
              src={s + arr.image}
              alt={arr.title}
            ></img>
          </a>
          <div
            className="cart-added"
            onClick={() => {
              xArr.length = 0;
              window.localStorage.setItem("selected", arr.id);
              handlingClick();
              return xArr.push(arr.id);
            }}
          >
            <div>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping"></FontAwesomeIcon>{" "}
            </div>
            <span>Add to cart?</span>
          </div>
          {added === true ? (
            <div className="cart-pop">
              <i className="fa-solid fa-check"></i> Added To Cart
            </div>
          ) : null}
        </div>
        <div className="cart-text">
          <h5>{arr.title}</h5>
          <span>{arr.maincategory}</span>
          <p>{arr.price} $</p>
          <div className="text-btn">{cont}</div>
        </div>
      </div>
    </div>
  );
}
export const sArr = xArr;
