import React, { Component } from 'react';
import './App.css';

import tasks from './data/tasks.json';

class App extends Component {

  state = {
    tasks: tasks
  }

  render(){
    return <div>
      {/* Aquí mostramos el "title" de cada task; usamos la función map para iterar el arreglo; esta función nos regresa un arreglo nuevo, nunca el mismo que iteramos. Por cada elemento que generamos cuando recorremos elementos de un array el debemos de ponerle una propiedad "key" */}
      { this.state.tasks.map(e => <p key={e.title}>{ e.title } - { e.description } - { e.done }  { e.id } </p>)}

    </div>  
  }
}

export default App;
