import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./header";
import Recipes from "./recipes";
import Favourites from "./favourites";
import NotFound from "./notFound";
import "../styles/styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Header />
            <Switch>
              <Redirect from="/home" to="/" />
              <Route exact path="/" component={Recipes} />
              <Route exact path="/favourites" component={Favourites} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
