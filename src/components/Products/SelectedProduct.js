import { useEffect, useState, useRef } from "react";
import { Card } from "../Home page/SellerCard";
import { sArr } from "../Home page/SellerCard";
import { ShoppingBtn } from "../Home page/LandingPage";
import newData from "../../storeObj.json";
let cartMap = {};
let cartArr = [];
export function SelectedProduct() {
  let [data, setData] = useState([]);
  useEffect(() => {
    // fetch("/storeObj.json")
    //   .then((e) => e.json())
    //   .then((ele) => setData(ele));
    setData(newData);
  }, []);

  let x;

  if (window.localStorage.getItem("selected") !== null) {
    x = data.filter((e) => {
      return e.id === +window.localStorage.getItem("selected");
    });
  } else {
    x = data.filter((e) => {
      return e.id === sArr[0];
    });
  }

  let product = x[0];

  let s = data.filter((ele) => {
    return ele.category === product.category;
  });
  s = s.filter((e) => {
    return e.id !== +window.localStorage.getItem("selected");
  });

  if (product !== undefined && s !== undefined && product !== null) {
    return (
      <>
        <section className="product">
          <Product product={product}></Product>
          <Related array={s}></Related>
        </section>
      </>
    );
  } else {
    return <div className="loading-product"></div>;
  }
}
function Product({ product }) {
  let [added, addToCart] = useState(false);
  let pop = useRef();
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
        // cartArr.push(cartMap);
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
    const intervalId = setInterval(() => {
      addToCart(false);
    }, 3700);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container">
        <div className="sl-product position-relative overflow-hidden">
          <div className="img-container">
            <img src={"../" + product.image} alt={product.title}></img>
          </div>
          <div className="product-text">
            <span className="cat">{product.maincategory}</span>
            <h2>{product.title}</h2>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
            <div className="product-btn">
              <button
                className="added-to-cart"
                onClick={() => {
                  handlingClick();
                }}
              >
                Add to Cart
              </button>
              {added === true ? (
                <div className="cart-pop" ref={pop}>
                  <i class="fa-solid fa-check"></i> Added To Cart
                </div>
              ) : null}
            </div>
            <h5>Category : {product.category}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

function Related({ array }) {
  return (
    <>
      <div className="related ">
        <div className="container">
          <h2>Related Products</h2>
          <div className="rt row">
            {array.map((ele) => {
              return (
                <>
                  <Card
                    arr={ele}
                    clas={"col-12 col-md-6 col-lg-4 col-xl-3"}
                    cont={
                      <ShoppingBtn content="Show All Products"></ShoppingBtn>
                    }
                    s="../"
                  ></Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
