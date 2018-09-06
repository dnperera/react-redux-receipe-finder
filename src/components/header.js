import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/receipe-icon.png";

const Header = () => {
  const HeaderLink = ({ children, ...props }) => (
    <NavLink
      className="h6 mx-3 text-warning p-2"
      exact
      activeClassName="bg-white text-dark"
      {...props}
    >
      {children}
    </NavLink>
  );

  return (
    <header className="container-fluid py-4 bg-secondary">
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12">
          <div className="d-inline">
            <img
              className="img-thumbnail rounded-circle logo"
              src={logo}
              alt="Find your recipe!"
            />
          </div>
          <div className="d-inline mx-2 name">Find Favourite Recipe</div>
        </div>
        <div className="col-md-2 offset-md-4 col-sm-12">
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/favourites">Favourites</HeaderLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
