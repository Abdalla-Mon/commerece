import { useState } from "react";

export function Checkout() {
  let ourData = JSON.parse(window.localStorage.getItem("checkout"));
  if (ourData === null || ourData === []) {
    return <div className="empty-check">No Product Added</div>;
  } else {
    return (
      <>
        <section className="checkout">
          <h1>Checkout</h1>
          <div className="container">
            <div className="checkout-content">
              <div className="order-container">
                <div className="order d-flex justify-content-between">
                  <div>Product</div>
                  <p>Subtotal</p>
                </div>
                {ourData.map((e, index) => {
                  return <Check arr={e} key={index}></Check>;
                })}
                <div className="order d-flex justify-content-between">
                  <div>Total</div>
                  <p>${(+window.localStorage.getItem("t")).toFixed(2)}</p>
                </div>
              </div>
              <CheckForm></CheckForm>
            </div>
          </div>
        </section>
      </>
    );
  }
}
function CheckForm() {
  let [show, shower] = useState(false);
  return (
    <>
      <form
        className="position-relative"
        onSubmit={(e) => {
          e.preventDefault();
          shower(true);
          window.localStorage.clear();
        }}
      >
        {show ? (
          <div className="checkout-done">
            <p className="check-popup">Order done</p>
            <p>We will contact you soon to confirm the order</p>
          </div>
        ) : null}
        <h3>Billing details</h3>
        <div className="name">
          <label htmlFor="first-name">
            <div>
              First name <span>*</span>
            </div>
            <input type="text" id="first-name" required></input>
          </label>
          <label htmlFor="last-name">
            <div>
              Last name <span>*</span>
            </div>
            <input type="text" id="last-name" required></input>
          </label>
        </div>
        <div className="countery">
          <div>
            Countery <span>*</span>
          </div>
          <select>
            <option value={"Egypt"}>Egypt</option>
            <option value={"Syria"}>Syria</option>
            <option value={"palestine"}>palestine</option>
          </select>
        </div>
        <div className="street">
          <label htmlFor="street-name">
            <div>
              Street address
              <span>*</span>
            </div>
            <input
              type="text"
              id="street-name"
              required
              placeholder="House number and street name"
            ></input>
          </label>{" "}
        </div>
        <div className="town">
          <label htmlFor="town-name">
            <div>
              Town / City
              <span>*</span>
            </div>
            <input type="text" id="town-name" required></input>
          </label>{" "}
        </div>
        <div className="postcode">
          <label htmlFor="postcode-name">
            <div>
              Postcode / ZIP
              <span>*</span>
            </div>
            <input type="text" id="postcode-name" required></input>
          </label>{" "}
        </div>
        <div className="phone">
          <label htmlFor="phone-name">
            <div>
              Phone
              <span>*</span>
            </div>
            <input type="text" id="phone-name" required></input>
          </label>{" "}
        </div>
        <div className="email">
          <label htmlFor="email-name">
            <div>Email address</div>
            <input type="email" id="email-name"></input>
          </label>{" "}
        </div>
        <button type="submit" value={"Make order"}>
          Make order
        </button>
      </form>
    </>
  );
}
function Check({ arr }) {
  return (
    <div className="order d-flex justify-content-between">
      <div className="check-title d-flex">
        <p>{arr.title} </p> *{" "}
        <span>{Math.trunc(arr.totPrice / arr.price)}</span>
      </div>
      <p>${arr.totPrice} </p>
    </div>
  );
}
