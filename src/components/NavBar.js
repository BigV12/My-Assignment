import React from "react";

// import { FaGithub } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

import "./NavBar.css";

function NavBar() {
  return (
    // <IconContext.Provider value={{ color: "red" }}>            </IconContext.Provider>
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
      <li className="notification">
        <span class="badge">3</span>
        <BsCart2 size="50px" />
      </li>
    </ul>
  );
}

export default NavBar;
