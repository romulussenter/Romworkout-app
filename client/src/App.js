import React, { Component } from "react";
import "./App.css";
import { workoutsRouter } from "./services/workoutsRouters";
import { Router, withRouter } from "react-router-dom";
import Nav from "./pages/nav";
import myWorkouts from "./components/myWorkouts";

class App extends Component {
  constructor() {
    super();
    this.state = {
      exerciseToAdd: "",
      exercise: [],
      reps: 0,
      sets: 0
    };

    this.updateExercise = this.updateExercise.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.repsNumber = this.repsNumber.bind(this);
    this.setsNumber - this.setsNumber.bind(this);
  }

  updateExercise(e) {
    e.preventDefault();
    this.setState({
      exerciseToAdd: e.target.value
    });
  }

  addExercise(e) {
    e.preventDefault();
    this.setState({
      exercise: [...this.state.exercise],
      exerciseToAdd: ""
    });
  }
  repsNumber(e) {
    e.preventDefault();
    this.setState({
      reps: +e.target.value
    });
  }

  setsNumber(e) {
    e.preventDefault();
    this.setState({
      sets: +e.target.value
    });
  }
  render() {
    const { match, location, history } = this.props;
    return (
      <div>
        <Nav />
        <Router path="/" exact component={myWorkouts} />
        <div className="br" />

        <h1>Rom's Workout App</h1>

        <form onSubmit={e => this.addExercise(e)}>
          <label>
            <p>Search your exercises!!</p>
            <input
              type="text"
              onChange={e => this.updateExercise(e)}
              value={this.state.exerciseToAdd}
            />
          </label>

          <button type="submit">+</button>
        </form>

        <div>
          <from>
            <p>Reps</p>
            <label>
              <input
                type="number"
                onChange={e => this.repsNumber(e)}
                value={this.state.reps}
              />
            </label>
          </from>

          <div>
            <from>
              <p>Sets</p>
              <label>
                <input
                  type="number"
                  onChange={e => this.setsNumber(e)}
                  value={this.state.sets}
                />
              </label>
            </from>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter (App);
