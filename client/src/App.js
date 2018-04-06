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

  this.updateExercise = this.updateExercise.bind(this);
  this.addExercise = this.addExercise.bind(this);

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
  exercise: [...this.state.exercise],
  exerciseToAdd:''

  });

}

  render() {
    return (
    <div  >
    <div className='br'></div>
    
     <h1>Rom's Workout App</h1>

      <form onSubmit={(e) => this.addExercise(e)} >
      
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
