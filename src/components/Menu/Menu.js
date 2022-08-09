import React from "react";

import "./Menu.css";

import b1 from "./b1.png";
import b1 from "./b1.png";
import b1 from "./b1.png";
import b1 from "./b1.png";
import b1 from "./b1.png";
import b1 from "./b1.png";

import Check from "./Check";

const Menu = () => {
  const food = [
    {
      image: b1,
      title: "Buger Dreams",
      price: "$1.22 USD",
      description:
        "  Easily adapt your menu using the webflow " +
        "and allow customers to",
    },
    {
      image: b1,
      title: "Buger ytaaaa",
      price: "$6.22 USD",
      description:
        "  Easily adapt your menu using the webflow CMS and allow customers to",
    },
    {
      image: b1,
      title: "Buger ytaaaa",
      price: "$6.22 USD",
      description:
        "  Easily adapt your menu using the webflow CMS and allow customers to",
    },
    {
      image: b1,
      title: "Buger ytaaaa",
      price: "$6.22 USD",
      description:
        "  Easily adapt your menu using the webflow CMS and allow customers to",
    },
    {
      image: b1,
      title: "Buger ytaaaa",
      price: "$6.22 USD",
      description:
        "  Easily adapt your menu using the webflow CMS and allow customers to",
    },
    {
      image: b1,
      title: "Buger ytaaaa",
      price: "$6.22 USD",
      description:
        "  Easily adapt your menu using the webflow CMS and allow customers to",
    },
  ];

  return (
    <div className="menu-container">
      <h2>Browse our menu</h2>
      Use or menu to place an order or phone our store to <br></br>
      place a pickup order. Fast and Fresh food<br></br>
      <button className="burgers">Burgers</button>
      <button className="slides">Slides</button>
      <button className="drinks">Drinks</button>
      <Check items={food} />
    </div>
  );
};

export default Menu;
