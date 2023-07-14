import { useRef, useState } from "react";
import { Logo } from "./Navbar";

export function Footer() {
  let [rBtn, btnRemover] = useState(true);
  let inp = useRef("");
  function submitting() {
    if (inp.current.value !== "") {
      btnRemover(false);
    }
  }
  let menList = [
    {
      id: 1,
      title: "Men Shoes",
    },
    {
      id: 2,
      title: "Men Shirts",
    },
    {
      id: 3,
      title: "Men Jackets",
    },
    {
      id: 4,
      title: "Men Accessories",
    },
  ];
  let womenList = [
    {
      id: 1,
      title: "women Shoes",
    },
    {
      id: 2,
      title: "women Shirts",
    },
    {
      id: 3,
      title: "women Jackets",
    },
    {
      id: 4,
      title: "women Accessories",
    },
  ];
  return (
    <>
      <footer>
        <div className="container ">
          <div className="row">
            <div className="logo col-sm-12 col-lg-3">
              <Logo></Logo>
              <h3>The best look anytime, anywhere.</h3>
            </div>
            <div className="her col-sm-6 col-lg-3">
              <h4>For Her</h4>
              <List obj={womenList}></List>
            </div>
            <div className="him col-sm-6 col-lg-3">
              <h4>For Him</h4>
              <List obj={menList}></List>
            </div>
            <div className="subscribe col-sm-12 col-lg-3">
              <h4>Subscribe</h4>
              {rBtn === true ? (
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    ref={inp}
                    type="email"
                    required
                    placeholder="Enter you email"
                  ></input>
                  <input
                    className="btn"
                    type="submit"
                    value={"Subscribe"}
                    onClick={submitting}
                  ></input>
                </form>
              ) : (
                <p>
                  Thanks for signing up for the newsletter! We'll be in touch
                  soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </footer>
      <div className="mine ">
        Made With Love By{" "}
        <a href="https://abdalla-mon.github.io/Portfolio/">Abdalla-Mon</a>
      </div>
    </>
  );
}

function List({ obj }) {
  return (
    <>
      <ul>
        {obj.map((e) => {
          return (
            <li
              key={e.id}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              {e.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}
