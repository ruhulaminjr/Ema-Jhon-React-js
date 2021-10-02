import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="" className="logo" />{" "}
      </NavLink>
      <div className="nav">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/order">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory here</NavLink>
      </div>
    </div>
  );
};

export default Header;
