import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Create from "./components/create";
import Read from "./components/read";

import "bootstrap/dist/css/bootstrap.min.css";
import Update from "./components/update";

export default function App() {
  return (
    <BrowserRouter>
      <div className="main text-center">
        <h2 className="main-header">React Crud Operations</h2>
      </div>
      <Switch>
        <Route path="/create" exact component={Create} />
        <Route path="/" exact component={Read} />
        <Route path="/update/:id" exact component={Update} />
      </Switch>
    </BrowserRouter>
  );
}
