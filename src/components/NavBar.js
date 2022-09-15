import React, { Fragment } from "react";
import { useState } from "react";
import Helmet from "react-helmet";

// import { FaGithub } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { FaAlignLeft } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const style = { color: "white", backgroundColor: "#3ea5b5" };

  return (
    // <IconContext.Provider value={{ color:#3ea5b5 }}>
    <Fragment>
      <ul>
        <li>
          <a class="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">Order</a>
        </li>
        <li>
          <a href="#contact">Company</a>
        </li>
        <li>
          <a href="#contact">FAQ</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="cart">
          <span class="badge">3</span>
          <BsCart2 size="50px" style={style} />
        </li>
      </ul>
      <FaAlignLeft />
    </Fragment>

    // <IconContext.provider />
  );
}

export default NavBar;
