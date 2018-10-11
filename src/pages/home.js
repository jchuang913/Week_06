import React, { Component } from "react";
import ToDoListItem from "./components/toDoListItem";
import { Route, Redirect } from 'react-router'

class Home extends React.Component {
  state = {
    todos: [
      "Snooze",
      "Snooze again",
      "Wake up",
      "Rest eyes",
      "Accidentally fall back asleep",
      "Wake up late",
      "Eat breakfast",
      "Fall back asleep again"
    ],
  };

  addToDo = () => {
    this.setState({
      todos: [...this.state.todos, "Snooze"]
    })
  };

  render() {
    return (
      <div><div>
        <h2>Home</h2>
        {this.state.todos.map(x => (
          <ToDoListItem todo={x} />
        ))}
      </div>
      <Redirect
        to={{
          pathname: "about",
          search: "asdf",
          state: { referrer: "home" }
        }}
      /></div>
    );
  }
}

export default Home;
