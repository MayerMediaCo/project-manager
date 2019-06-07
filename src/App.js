import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'
import EditTodo from './components/EditTodo'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
        </header>
        <Route path="/" exact component={Todo} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
