import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './components/todo';


//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
      //  <img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
        //  target="_blank"
          //rel="noopener noreferrer"
        //>
        //  Learn React
      //  </a>
    //  </header>
    //</div>
//);
//}


class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: ['User Interface','User Experience','App Security','App Performance']
    };
  }

  addTask(event) {
    if (event.keyCode !== 13) return;

    const newTask = event.target.value;
    this.setState({tasks:[...this.state.tasks, newTask]});
  }

  render() {
  return(
    <div className="App">
      <h5> Test for Good </h5>
      <img src={logo} alt="logo"/>
        <TodoList onAddTask={(event) => this.addTask(event)} tasks={this.state.tasks} />
    </div>
  );
}
}

export default App;
