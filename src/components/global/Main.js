import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "../routes/CreateTodo";
import Todo from "../routes/Todo";
import EditTodo from "../routes/EditTodo";
import Home from '../routes/Home'

function Main() {
  return (
    <Router>
      <main className="main">
        <Route path="/" exact component={Home} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/todo" exact component={Todo} />
      </main>
    </Router>
  );
}

export default Main;
