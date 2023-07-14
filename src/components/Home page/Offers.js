import { OffersCard } from "./OffersCard";
import SwiperAuto from "../SwiperAuto";
export function Offers() {
  const arrOfheading = [
    "20% Off On Jackets",
    "New Lorem Suit",
    "Latest Suit For You",
  ];
  const keys = ["offer-1", "offer-2", "offer-3"];
  return (
    <>
      <section className="offers">
        <div className="container">
          <SwiperAuto></SwiperAuto>
          <div className="row">
            {arrOfheading.map((ele, index) => {
              return (
                <OffersCard
                  cl={`col-lg-4 col-md-6 col-12 ${keys[index]} offer-content`}
                  key={keys[index]}
                >
                  <h3>{ele}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ac dictum.​
                  </p>
                </OffersCard>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
