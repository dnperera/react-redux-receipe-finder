import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h3 className="h3 py-4"> 404 Error : Recipe Not Found !.</h3>
      <Link className="h5 py-4" to="/">
        {" "}
        View Recipes
      </Link>
    </div>
  );
};
export default NotFound;
