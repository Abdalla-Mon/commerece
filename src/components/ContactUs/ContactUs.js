import { FixedLanding } from "../FixedLanding";
import { ContactForm } from "./ContactForm";
export function ContactUs() {
  const callCenterArr = [
    {
      heading: "Sales",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus.      ",
      contact: "1811 123 4567",
    },
    {
      heading: "Complaints",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus.      ",
      contact: "1900 223 8899   ",
    },
    {
      heading: "Returns",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus.      ",
      contact: "returns@mail.com  ",
    },
    {
      heading: "Marketing",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus.      ",
      contact: "1510 123 5000",
    },
  ];
  return (
    <>
      <div
        className="contact-us"
        onClick={(e) => {
          if (
            e.target !==
              document.querySelectorAll(".contact-us form label input")[0] &&
            e.target !==
              document.querySelectorAll(".contact-us form label input")[1] &&
            e.target !==
              document.querySelectorAll(".contact-us form label input")[2] &&
            e.target !==
              document.querySelector(".contact-us form label textarea")
          ) {
            document.querySelectorAll(".contact-us label span").forEach((s) => {
              s.classList.remove("act");
            });
          }
        }}
      >
        <FixedLanding
          clas={"contact-landing fixed-landing"}
          textClas={"contact-text fixed-text"}
          heading={"Contact"}
        ></FixedLanding>
        <div className="call-center">
          <div className="container text-center">
            <h5>Have any queries?</h5>
            <h2>We're here to help.​</h2>
            <div className="row">
              {callCenterArr.map((callEle, index) => {
                return (
                  <CallCenter
                    arr={callEle}
                    key={callEle.heading + index}
                  ></CallCenter>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="container">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </>
  );
}
function CallCenter({ arr }) {
  return (
    <>
      <div className=" col-12 col-md-6 col-lg-3">
        <div className="call">
          <h3>{arr.heading}</h3>
          <p>{arr.text}</p>
          <h5>{arr.contact}</h5>
        </div>
      </div>
    </>
  );
}
