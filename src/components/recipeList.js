import React, { Component } from "react";

class RecipeList extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <h2>List of Recipes ...</h2>
        <ul>
          <li>
            <span>Sweet Potatoes with Apple Butter</span>
            <span>Dessert</span>
          </li>
          <li>
            <span>Beef Stew in Red Wine Sauce</span>
            <span>Soup</span>
          </li>
          <li>
            <span>Butternut Squash Soup with Crisp Pancetta </span>
            <span>Soup</span>
          </li>
          <li>
            <span>Pear-Cranberry Hand Pies</span>
            <span>Dessert</span>
          </li>
          <li>
            <span>Three-Chile Beef Chili</span>
            <span>Soup</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default RecipeList;
