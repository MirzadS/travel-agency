import React from "react";
import img1 from "../../assets/maldives.jpg";
import "./AboutUsSectionStyles.css";

const AboutUsSection = () => {
  return (
    <section className="section about">
      <div className="image">
        <img src={img1} alt="" />
      </div>

      <div className="content">
        <h3>why choose us?</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure numquam
          nulla iusto corporis dolor commodi libero, vitae obcaecati optio rerum
          ab culpa nesciunt, earum mollitia quasi ipsam non. Aliquid, iure.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          rerum, delectus voluptate aliquam quaerat iusto repellendus error
          nulla ab atque.
        </p>
        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-map"></i>
            <span>top destinations</span>
          </div>
          <div className="icons">
            <i className="fas fa-hand-holding-usd"></i>
            <span>affordable price</span>
          </div>
          <div className="icons">
            <i className="fas fa-headset"></i>
            <span>24/7 guide service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
