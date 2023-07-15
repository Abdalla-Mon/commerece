import { Link } from "react-router-dom";

export function Landing() {
  let altText = "Landing imgae for a man wearing jacket";
  return (
    <>
      <section className="landing-page">
        <div className="container">
          <div className="landing-text">
            <h1>boost your style sense</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nisi modi placeat laborum facilis nesciunt
              exercitationem eligendi expedita molestias commodi. Facilis natus
              quisquam accusamus? Natus cum incidunt magni aut maiores.
            </p>
            <div className="text-btn">
              <ShoppingBtn></ShoppingBtn>
              <a href="/">Find More</a>
            </div>
          </div>
          <div className="landing-img">
            <img src="../imgs/landing.png" alt={altText}></img>
          </div>
        </div>
      </section>
    </>
  );
}

export function ShoppingBtn({ content = "Shop Now" }) {
  return (
    <>
      <Link to={"/products/page-1"} className="shop-btn">
        {content}
      </Link>
    </>
  );
}
