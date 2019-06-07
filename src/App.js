import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/global/Header'

import CreateTodo from './components/routes/CreateTodo'
import Todo from './components/routes/Todo'
import EditTodo from './components/routes/EditTodo'

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Header />

        <Route path="/" exact component={Todo} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
