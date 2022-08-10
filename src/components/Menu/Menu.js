import React from "react";

import "./Menu.css";

import b1 from "./b1.png";
import b2 from "./b2.png";
import b3 from "./b3.png";
import b4 from "./b4.png";
import b5 from "./b5.png";
import b6 from "./b6.png";

import Check from "./Check";

const Menu = () => {
  const food = [
    {
      image: b1,
      title: "Buger Dreams",
      price: "$1.22 USD",
      description:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry" +
        "and allow customers to",
    },
    {
      image: b2,
      title: "BugerCali",
      price: "$8.00 USD",
      description:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: b3,
      title: "Buger Spicy",
      price: "$6.22 USD",
      description:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: b4,
      title: "Buger Waldo",
      price: "$6.22 USD",
      description:
        "  ELorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: b5,
      title: "Buger Bacon Buddy",
      price: "$6.22 USD",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      image: b6,
      title: "Buger Classic",
      price: "$6.22 USD",
      description:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <div className="menu-container">
      <h2>Browse our menu</h2>
      <p className="text">
        Use or menu to place an order or phone our store to <br></br>
        place a pickup order. Fast and Fresh food<br></br>
      </p>
      <div className="case">
        <button className="burgers active">Burgers</button>
        <button className="slides">Slides</button>
        <button className="drinks">Drinks</button>
        <Check items={food} />
      </div>

      <div className="full">
        {" "}
        <button className="full-menu"> See Full Menu</button>
      </div>
    </div>
  );
};

export default Menu;
