import React, { Component } from 'react';
import './App.css';

import tasks from './data/tasks.json';
import TasksList from './components/TasksList';

import TaskForm from './components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  render(){
    return <div>
      {/* Aquí mandamos la propiedad que es un arreglo llamado "tasks", que puede ser cualquier otro nombre, desde este componente que es el padre, al componente TasksList, que sería el hijo; en el componente TasksList ahora debemos recibir esta propiedad con "this.props.tasks"  */}
      <TaskForm/>
      <TasksList tasks={ this.state.tasks } />
    </div>  
  }
}

export default App;
