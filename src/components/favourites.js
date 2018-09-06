import React from "react";
import PropTypes from "prop-types";

const Favourites = ({ favourites }) => (
  <div>
    <h1>My favourite recipes...</h1>
    <ul>
      {favourites.map(id => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  </div>
);

Favourites.propTypes = {
  favourites: PropTypes.array
};
export default Favourites;
