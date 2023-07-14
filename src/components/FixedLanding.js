export function FixedLanding({ clas, textClas, heading }) {
  return (
    <>
      <div className={clas}>
        <div className="overlay"></div>
        <div className="not-container">
          <div className={textClas}>
            <h2>{heading} Us</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              quisquam error dignissimos quia temporibus, quos sequi reiciendis
              magni eaque molestiae? Minima ea sit in aliquam? Commodi corrupti
              fuga porro. Suscipit?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}