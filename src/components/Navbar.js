import { Link, Outlet, NavLink } from "react-router-dom";
import { Footer } from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  position-sticky">
        <div className="container">
          <Logo></Logo>
          <NavCart classN={"d-flex d-lg-none  nav-icons-mob"}></NavCart>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLinks></NavLinks>
            <NavCart classN={"d-flex   nav-icons-pc"}></NavCart>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
function NavCart({ classN }) {
  return (
    <>
      <div className={classN}>
        <Link to={"/cart"} className="cart-container">
          {" "}
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="me-3" />
          <span className="cart-counter">
            {window.localStorage.getItem("nums") || 0}
          </span>
        </Link>
        <Link>
          <FontAwesomeIcon icon="fa-solid fa-user" />{" "}
        </Link>
      </div>
    </>
  );
}

function NavLinks() {
  const navItem = ["home", "products", "about", "contact"];
  let i = 0;
  return (
    <>
      <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
        {navItem.map((navEle) => {
          return (
            <li className="nav-item" key={i++}>
              {links(navEle)}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function links(navEle) {
  if (navEle === "home") {
    return (
      <NavLink className="nav-link" to={"/home"}>
        {navEle}
      </NavLink>
    );
  } else if (navEle === "products") {
    return (
      <NavLink className="nav-link" to={"/commerece/" + navEle + "/page-1"}>
        {navEle}
      </NavLink>
    );
  } else {
    return (
      <NavLink className="nav-link" to={"/commerece/" + navEle}>
        {navEle}
      </NavLink>
    );
  }
}

export function Logo() {
  return (
    <>
      <h1 className="logo-i">
        <Link to={"/"}>
          <span>E</span> Commerece
        </Link>
      </h1>
    </>
  );
}
export default Navbar;
