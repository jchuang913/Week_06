import React, { Component } from "react";
import { Route, Redirect } from 'react-router';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <button onClick={this.props.location.addToDo}> Snooze </button>
      </div>
    );
  }
}

export default About;
