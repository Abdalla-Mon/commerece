import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Cart() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("/storeObj.json")
      .then((e) => e.json())
      .then((ele) => setData(ele));
  }, []);
  let [n, nSeter] = useState(false);
  let cartArr;
  let filterdArr = [];
  let cartKeys = [];
  let cartObj = [];
  function c() {
    if (window.localStorage.getItem("cartArr") !== null) {
      nSeter(true);
    } else {
      nSeter(false);
    }
  }
  let [money, setMoney] = useState(+window.localStorage.getItem("t") || 0);
  useEffect(() => {
    c();
  }, [n]);

  if (window.localStorage.getItem("cartArr") !== null) {
    cartArr = JSON.parse(window.localStorage.getItem("cartArr"));
    cartArr.forEach((s) => {
      cartObj.push(s);
      cartKeys.push(...Object.keys(s));
    });
    cartKeys.forEach((e) => {
      let ele = data.filter((el) => {
        return el.id === +e;
      });
      filterdArr.push(...ele);
    });
  }
  let reduced = [];
  function h() {
    if (window.localStorage.getItem("cartArr") !== "[]") {
      reduced = [];
      document.querySelectorAll(".span-subtotal").forEach((en) => {
        reduced.push(en.innerHTML);
      });
      let filterArr = [...new Set(reduced)];

      filterArr = filterArr.reduce((acc, curr) => {
        return +curr + +acc;
      });

      window.localStorage.setItem("t", filterArr);
      setMoney(+window.localStorage.getItem("t"));
    } else {
      window.localStorage.setItem("t", 0);
      window.localStorage.removeItem("cartArr");
      window.location.reload();
    }
  }
  function handlingCheckOut() {
    let checkArr = [];
    document.querySelectorAll(".mobile-cart tr").forEach((e) => {
      let titleDom = e.children[2].childNodes[1].textContent;
      let priceDom = e.children[3].childNodes[1].textContent;
      let tPriceDom = e.children[5].childNodes[1].innerHTML;
      let obj = {
        title: titleDom,
        price: priceDom,
        totPrice: tPriceDom,
      };
      checkArr.push(obj);
    });
    window.localStorage.setItem("checkout", JSON.stringify(checkArr));
  }
  return (
    <>
      <section className="cart-page">
        <div className="container">
          <div className="main-cart ">
            {n === false ? (
              <div className="empty-cart">Nothing Added To Cart </div>
            ) : (
              <>
                <div
                  className="cart-remover"
                  onClick={() => {
                    window.localStorage.removeItem("cartArr");
                    window.localStorage.removeItem("nums");
                    window.localStorage.removeItem("t");
                    window.location.reload();
                  }}
                >
                  Remove All
                </div>
                <div className="cart-content">
                  <table>
                    <RemovePc></RemovePc>
                    {filterdArr.map((ele) => {
                      return <Input e={ele} key={ele.id}></Input>;
                    })}
                  </table>
                  <div className="cart-total">
                    <h3>Cart totals</h3>
                    <p>Total : {money.toFixed(2)}$</p>
                    <Link
                      to={"/cart/checkout"}
                      onClick={() => {
                        document.querySelector(".cart-updater").click();
                        handlingCheckOut();
                      }}
                    >
                      Checkout
                    </Link>
                    <button onClick={h} className="cart-updater">
                      Update Cart
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
function Input({ e }) {
  const [conut, counter] = useState(1);

  function increase() {
    counter(+conut + 1);
    window.localStorage.setItem("conut-val", +conut + 1);
  }
  function decrease(el) {
    if (conut <= 1) {
      window.localStorage.setItem("conut-val", 1);
      counter(1);
    } else {
      counter(+conut - 1);
      window.localStorage.setItem("conut-val", +conut - 1);
    }
  }
  function handle(el) {
    counter(el.target.value);
  }

  function removingCurr(el) {
    let x = JSON.parse(window.localStorage.getItem("cartArr"));
    if (x !== null) {
      let f = Object.keys(x[0]);
      let title = el.target.parentElement.parentElement.dataset.id;

      let filterd = f.filter((ele) => {
        return +ele !== +title;
      });

      let lastArr = [];
      let lastObj = {};
      filterd.forEach((e) => {
        lastObj[e] = 1;
        lastArr[0] = lastObj;
      });
      window.localStorage.setItem("cartArr", JSON.stringify(lastArr));

      window.localStorage.setItem(
        "nums",
        window.localStorage.getItem("nums") - 1 || 0
      );
      document.querySelectorAll(".cart-counter").forEach((e) => {
        e.innerHTML = window.localStorage.getItem("nums");
      });
      el.target.parentElement.parentElement.remove();
    }
  }
  return (
    <MobileTbody
      remove={removingCurr}
      e={e}
      conut={conut}
      handle={handle}
      inc={increase}
      dec={decrease}
    ></MobileTbody>
  );
}

function MobileTbody({ e, conut, handle, inc, dec, remove }) {
  return (
    <>
      <tbody className={"mobile-cart  pc-cart " + e.title} id={e.title + e.id}>
        <tr data-id={e.id}>
          <td className="remove-product">
            <span onClick={(e) => remove(e)}>x</span>
          </td>
          <td className="pro-img">
            <img
              src={"../" + e.image}
              style={{ width: "100px" }}
              alt={e.title}
            ></img>
          </td>
          <td className="pro-title">
            <p className="d-md-none">Product</p>
            {e.title}
          </td>
          <td className="pro-price">
            <p className="d-md-none">Price</p>
            {e.price}$
          </td>
          <td className="pro-quantity">
            <p className="d-md-none">Quantity</p>
            <label>
              <input
                type="text"
                name={e.title}
                min={1}
                id={e.id}
                onChange={(e) => {
                  handle(e);
                  window.localStorage.setItem("last", e.target.value);
                }}
                value={conut}
              />
              <div className="chevron-container">
                <button onClick={inc}>
                  <FontAwesomeIcon icon="fa-solid fa-chevron-up"></FontAwesomeIcon>
                </button>
                <button onClick={(e) => dec(e)}>
                  <FontAwesomeIcon icon="fa-solid fa-chevron-down"></FontAwesomeIcon>
                </button>
              </div>
            </label>
          </td>
          <td className="pro-subtotal">
            <p className="d-md-none">Subtotal</p>
            <span className="span-subtotal">
              {(e.price * conut).toFixed(2)}
            </span>
            ${" "}
          </td>
        </tr>
      </tbody>
    </>
  );
}
function RemovePc() {
  return (
    <>
      <thead>
        <tr className="remove-pc ">
          <td className="remove-product"> </td>
          <td className="pro-img"> </td>
          <td className="pro-title">Product</td>
          <td className="pro-price">Price</td>
          <td className="pro-quantity">Quantity</td>
          <td className="pro-subtotal">Subtotal</td>
        </tr>
      </thead>
    </>
  );
}
