import React, { Component } from "react";

class Home extends React.Component {
  state = {
    newTodo: "",
    todos: [
      "Snooze",
      "Snooze again",
      "Wake up",
      "Rest eyes",
      "Accidentally fall back asleep",
      "Wake up late"
    ],
    edits: []
  };

  handleChange = todo => event => {
    let updatedEdits = this.state.edits;
    updatedEdits[this.state.todos.indexOf(todo)] = event.target.value;
    this.setState({
      edits: updatedEdits
    });

    console.log(this.state.edits);
  };

  handleSubmit = event => {
    event.preventDefault();
    const index = this.state.todos.indexOf(event.target.value);
    let newTodos = this.state.todos;
    newTodos[index] = this.state.edits[index];
    let updatedEdits = this.state.edits;
    updatedEdits[index] = "";
    this.setState({
      todos: newTodos,
      edits: updatedEdits
    });
  };

  render() {
    return ( <div>
        <h2>Home</h2>
        {this.state.todos.map(todo => (
          <li key={todo}>
            {todo + " "}
            <input type="text" onChange={this.handleChange(todo)} />
            <button value={todo} onClick={this.handleSubmit}>
              Update
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default Home;
