import React, { Component } from 'react';
import './App.css';

import tasks from './data/tasks.json';
import TasksList from './components/TasksList';

import TaskForm from './components/TaskForm';

import Posts from './components/Posts';

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

  deleteTask = (id) =>{
    // El método filter nos permite crear un nuevo arreglo creado a partir de elementos que cumplen ciertos criterios; por cada tarea que recorremos examinamos si el id de la tarea es diferente del id que nos están pasando, de ser así entonces no la eliminamos, pero si el id de la tarea es igual al id que nos están pasando entonces sí lo eliminamos; en sí creamos un nuevo arreglo de tareas y se lo asigmanos al estado, este nuevo arreglo estará conformado por un filtro y este filtro tendrá todas las tareas cuyo id sea diferente al id que nos están pasando, es decir el arreglo tendrá la tarea ya eliminada
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
    console.log(newTasks);
  }

  // Para borrar una tarea recorremos el arreglo de tareas, y por cada tarea verificamos si el id de la tarea y el id que estamos buscando son iguales, si es así el valor de done cambia, si no regresamos la tarea
  updateTask = (id) =>{
    const newTasks = this.state.tasks.map(task =>{
      if(task.id === id){
        task.done = !task.done;
      }
      return task;
    });
    this.setState({
      tasks: newTasks
    })
  }

  render(){
    return <div>
      {/* Aquí mandamos la propiedad que es un arreglo llamado "tasks", que puede ser cualquier otro nombre, desde este componente que es el padre, al componente TasksList, que sería el hijo; en el componente TasksList ahora debemos recibir esta propiedad con "this.props.tasks".
      Al componente TaskForm le mandamos como propiedad la función addTask definida en este componente; en el componente TaskForm entonces debemos recibirla.
      A TasksList le pasamos la función de deleteTask para posteriormente desde ese componente recibirla y  pasarsela al componente Task.
      Mandamos como propiedad el método de updateTask desde este componente al componente TasksList; allá debemos de recibirlo   */}
      <TaskForm addTask={ this.addTask }/>
      <TasksList tasks={ this.state.tasks } deleteTask ={ this.deleteTask } updateTask={ this.updateTask }/>
      <Posts/>

    </div>  
  }
}

export default App;
