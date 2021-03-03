import React, { Component } from 'react';
import logo from './logo.svg';
import login from './login.svg';
import search from './search.svg';
import './App.css';
import {TodoList} from './components/todo';



class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: ['User Experience','App Security','App Performance','Server Side Error'],
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
      <img src={search} alt="search"/>&nbsp;<img src={logo} alt="logo"/>&nbsp;<img src={login} alt="login"/>
        <TodoList onAddTask={(event) => this.addTask(event)} tasks={this.state.tasks} />
        <h5>Colaboração na busca de solução</h5>
    </div>
  );
}
}

export default App;
