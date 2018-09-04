import React from "react";
import logo from "../images/receipe-icon.png";
const Header = props => {
  return (
    <header className="container-fluid py-4 bg-secondary">
      <div className="d-inline">
        <img
          className="img-thumbnail rounded-circle logo"
          src={logo}
          alt="Find your recipe!"
        />
      </div>
      <div className="d-inline mx-2 name">Find Favourite Recipe</div>
    </header>
  );
};

export default Header;
