import React, { Component } from "react";
import Header from "./header";
import RecipeList from "./recipeList";
import RecipeDetail from "./recipeDetail";
// import axios from "axios";
// axios.get(`${RECIPE_API}/v1/recipes`).then(res => console.log(res.data));
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main style={{ display: "flex" }}>
          <RecipeList style={{ flex: 3 }} />
          <RecipeDetail style={{ flex: 5 }} />
        </main>
      </div>
    );
  }
}

export default App;
