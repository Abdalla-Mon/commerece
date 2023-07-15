import { useEffect, useState } from "react";
import { Card } from "./SellerCard";
import { ShoppingBtn } from "./LandingPage";
import newData from "../../storeObj.json";
export function BestSeller() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("e-commerece/storeObj.json")
      .then((e) => e.json())
      .then((ele) => setData(ele));
  }, []);

  let arr = data.filter((ele) => {
    return ele.bestSaler === true;
  });

  return (
    <>
      <section className="best-seller">
        <div className="container">
          <h2>Best Seller</h2>
          <div className="best-content row">
            {arr.map((card) => {
              return (
                <Card
                  clas={"col-12 col-sm-6 col-md-4 col-lg-3  "}
                  arr={card}
                  key={card.id}
                  cont={<ShoppingBtn content="See More Products"></ShoppingBtn>}
                ></Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
