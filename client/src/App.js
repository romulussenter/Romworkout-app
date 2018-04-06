import React, { Component } from 'react';
import './App.css';
import {workoutsRouter} from './services/workoutsRouters';




class App extends Component {
  constructor(){
    super();
    this.state = {
      exerciseToAdd: '',
      exercise: []
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.exerciseToAdd = this.exerciseToAdd.bind(this);

  }
  
updateExercise(e){
e.preventDefault();
this.setState({
  exerciseToAdd: e.target.value
});
}

addExercise(e){
  e.preventDefault();
  this.setState({
  exercise: [...this.state.exercise, exercise],
  exerciseToAdd:''

  });

}

  render() {
    return (
    <div>
     <h1>Rom's Workout App</h1>

      <form onSubmit={(e) => this.addExercise(e)}>
      
        <label>
          <p>Search your exercises!!</p>
          <input type='text'
          onChange={e => this.updateExercise(e)}
          value={this.state.exerciseToAdd} />
        </label>
        <button type='submit'>+</button>
      </form>
     </div> 
    );
  }
}

export default App;
