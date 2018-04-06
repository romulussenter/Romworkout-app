import React, { Component } from 'react';
import './App.css';
import {workoutsRouter} from './services/workoutsRouters';

class App extends Component {
  
  

 

handleSubmit(e){
  e.preventDefault();

}

  render() {
    return (
    <div>
     <h1>Rom's Workout App</h1>

      <form onSubmit={(e) => this.handleSubmit(e)}>
      
        <label>
          <p>Search your exercises!!</p>
          <input type='text' />
        </label>
        <button>+</button>
      </form>
     </div> 
    );
  }
}

export default App;
