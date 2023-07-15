import { NavLink, Outlet } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import newData from "../../storeObj.json";

export function Products() {
  let [data, setData] = useState([]);
  useEffect(() => {
    // fetch("/storeObj.json")
    //   .then((e) => e.json())
    //   .then((ele) => setData(ele));
    setData(newData);
  }, []);

  let clicking = useRef(null);

  var url = data;

  let [catUrl, catChanger] = useState(url);

  let filterPrice = url.map((e) => {
    return e.price;
  });

  let minPrice = Math.min(...filterPrice);

  let maxPrice = Math.max(...filterPrice);

  let [max, setMax] = useState(+maxPrice);

  function filterCat() {
    if (catUrl === "all") {
      return url;
    }
    url = url.filter((e) => {
      return e.maincategory === catUrl;
    });
    return url;
  }
  if (catUrl !== null) {
    filterCat();
  }

  if (url.length === 0) {
    url = data;
  }
  function submitted() {
    url = url.filter((e) => {
      return e.price <= max && e.price >= minPrice;
    });
    return url;
  }

  if (max !== -Infinity) {
    submitted();
  }
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="filtering">
            <div className="price-range">
              <Range
                setMax={setMax}
                max={max}
                maxPrice={maxPrice}
                minPrice={minPrice}
              ></Range>
            </div>
            <div className="category-change">
              <Cat clicking={clicking} catChanger={catChanger}></Cat>
            </div>
          </div>
          <div className="pages">
            <div className="navigator">{shoingPages(url)}</div>
            <Outlet context={url}></Outlet>
          </div>
        </div>
      </section>
    </>
  );
}

function shoingPages(url) {
  if (url.length < 9) {
    return (
      <>
        <NavLink to={"/products/page-1"}>1</NavLink>
      </>
    );
  } else if (url.length > 9 && url.length < 18) {
    return (
      <>
        <NavLink to={"/products/page-1"}>1</NavLink>
        <NavLink to={"/products/page-2"}>2</NavLink>
      </>
    );
  }
  return (
    <>
      <NavLink to={"/products/page-1"}>1</NavLink>
      <NavLink to={"/products/page-2"}>2</NavLink>
      <NavLink to={"/products/page-3"}>3</NavLink>
    </>
  );
}
function Cat({ clicking, catChanger }) {
  return (
    <form>
      <h4>Sort By Categories</h4>
      <input
        ref={clicking}
        type="button"
        value="all"
        onClick={(e) => catChanger(e.target.value)}
      />
      <input
        type="button"
        value="men"
        onClick={(e) => catChanger(e.target.value)}
      />
      <input
        type="button"
        value="women"
        onClick={(e) => catChanger(e.target.value)}
      />
    </form>
  );
}

function Range({ minPrice, maxPrice, max, setMax }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h4>Sort By Price</h4>
      <input
        className="form-range"
        type="range"
        min={minPrice}
        max={maxPrice}
        value={max === -Infinity ? maxPrice : max}
        onChange={(e) => {
          setMax(e.target.value);
        }}
      ></input>
      <div className="price">
        <p>Min Price : {minPrice}$</p>
        <p>Max Price : {max !== -Infinity ? max + "$" : maxPrice + "$"}</p>
      </div>
    </form>
  );
}
