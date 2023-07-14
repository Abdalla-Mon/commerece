import React from "react";
import { FixedLanding } from "../FixedLanding";
import { AboutSwiper } from "./AboutSwiper";
import { AboutTeam } from "./AboutTeam";
export function About() {
  return (
    <>
      <section className="about">
        <FixedLanding
          clas={"about-landing  fixed-landing"}
          textClas={"about-text fixed-text"}
          heading={"About"}
        ></FixedLanding>
        <section className="swiper-container">
          <div className="container">
            <h2>Our Journey</h2>
            <AboutSwiper></AboutSwiper>
          </div>
        </section>
        <section className="about-team">
          <div className="container">
            <h2 className="c-color">Our Team Members</h2>
            <AboutTeam></AboutTeam>
          </div>
        </section>
      </section>
    </>
  );
}
