import React, { Component } from "react";
import Header from "./header";
import RecipeList from "./recipeList";
import RecipeDetail from "./recipeDetail";
import axios from "axios";
import "../styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null
    };
  }
  //load available recipes from the api
  componentDidMount() {
    axios.get(`${RECIPE_API}/v1/recipes`).then(res => {
      if (res.data) {
        axios.get(`${RECIPE_API}/v1/recipes/${res.data[0].id}`).then(result => {
          this.setState({
            recipes: res.data,
            currentRecipe: result.data
          });
        });
      }
    });
  }

  onRecipeClick = id => {
    axios.get(`${RECIPE_API}/v1/recipes/${id}`).then(res => {
      this.setState({ currentRecipe: res.data });
    });
  };
  render() {
    const { recipes, currentRecipe } = this.state;
    return (
      <div>
        <Header logo="\&#9749" />
        <div className="container  bg-light px-4">
          <div className="row">
            <RecipeList
              style={{ flex: 3 }}
              recipes={recipes}
              onRecipeClick={this.onRecipeClick}
            />
            <RecipeDetail style={{ flex: 5 }} recipe={currentRecipe} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
