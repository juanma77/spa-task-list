import React, { Component } from 'react';
import './App.css';

import tasks from './data/tasks.json';
import TasksList from './components/TasksList';

import TaskForm from './components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    // console.log(title, description); 

    // El id de la nueva tarea es el número siguiente que sigue en la longitud del arreglo 
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length 
    }
    
    console.log(newTask);

    this.setState({
      // Agregamos al estado actual del componente (para eso son los tres puntos ((...) una nueva tarea llamada newTask; esto hace que se refleje en la pantalla
      tasks: [...this.state.tasks, newTask]
    }) 
  }

  render(){
    return <div>
      {/* Aquí mandamos la propiedad que es un arreglo llamado "tasks", que puede ser cualquier otro nombre, desde este componente que es el padre, al componente TasksList, que sería el hijo; en el componente TasksList ahora debemos recibir esta propiedad con "this.props.tasks".
      Al componente TaskForm le mandamos como propiedad la función addTask definida en este componente; en el componente TaskForm entonces debemos recibirla  */}
      <TaskForm addTask={ this.addTask }/>
      <TasksList tasks={ this.state.tasks } />
    </div>  
  }
}

export default App;
