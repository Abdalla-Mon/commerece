import { Card } from "../Home page/SellerCard";
import { Link, useOutletContext } from "react-router-dom";
export function Page1() {
  const url = useOutletContext();

  let x = url;
  x = x.slice(0, 9);

  return (
    <>
      <div className="page page-1 row">
        {x.map((ele) => {
          return (
            <Card
              arr={ele}
              s="../"
              clas={"col-12 col-sm-6 col-lg-4"}
              cont={<Link to={"/products/product"}>Description</Link>}
              key={ele.id}
            ></Card>
          );
        })}
      </div>
    </>
  );
}
export function Page2() {
  const url = useOutletContext();
  let x = url.slice(9, 18);
  if (x.length === 0) {
    return (
      <>
        <Link className="emptyLink" to={"/products/page-1"}>
          Empty go to page 1 ?
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="page page-2 row">
        {x.map((ele) => {
          return (
            <Card
              arr={ele}
              s="../"
              clas={"col-12 col-sm-6 col-lg-4"}
              cont={<Link to={"/products/product"}>Description</Link>}
              key={ele.id}
            ></Card>
          );
        })}
      </div>
    </>
  );
}
export function Page3() {
  const url = useOutletContext();
  let x = url.slice(18);
  if (x.length === 0) {
    return (
      <>
        <Link className="emptyLink" to={"/products/page-1"}>
          Empty Back To Page 1 ?
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="page page-3 row">
        {x.map((ele) => {
          return (
            <Card
              arr={ele}
              s="../"
              clas={"col-12 col-sm-6 col-lg-4"}
              cont={<Link to={"/products/product"}>Description</Link>}
              key={ele.id}
            ></Card>
          );
        })}
      </div>
    </>
  );
}
