import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h2>" Let's Embrace technology to create a sustainable future "</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/dtpwzhjp9/image/upload/v1694920873/elec_lab_a55b9b27b7.jpg"
              text="Advancements in Electronics"
              label="Electronics domain"
              path="/"
            />
            <CardItem
              src="https://res.cloudinary.com/dtpwzhjp9/image/upload/v1694920919/cs_lab_2096a3d4f1.jpg"
              text="Advancements in Computer Science"
              label="Computer Science domain"
              path="/"
            />
            <CardItem
              src="https://res.cloudinary.com/dtpwzhjp9/image/upload/v1694920915/uok_adf5e690ac.jpg"
              text="About the  University"
              label="University of Kelaniya"
              path="https://www.kln.ac.lk/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Our aim is to cultivate a dynamic community of passionate undergraduates who are dedicated to exploring, advancing, and mastering the realms of electronics and computer science."
              label="Vision"
              path="/"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Our mission is to foster a collaborative and innovative community for Electronics and Computer Science students at the University of Kelaniya."
              label="Mission"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
