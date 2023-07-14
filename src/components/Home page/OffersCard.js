import { ShoppingBtn } from "./LandingPage";

export function OffersCard({ cl, children }) {
  return (
    <>
      <div className={cl}>
        <div className="offers-card-content">
          <div className="offer">
            {children}
            <div className="text-btn">
              <ShoppingBtn></ShoppingBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
