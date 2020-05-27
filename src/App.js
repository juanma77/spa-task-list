import React, { Component } from 'react';
import './App.css';

import tasks from './data/tasks.json';
import Tasks from './components/Tasks';

class App extends Component {

  state = {
    tasks: tasks
  }

  render(){
    return <div>
      {/* Aquí mandamos la propiedad "tasks", que puede ser cualquier otro nombre, al componente
      Tasks, que sería el hijo; en el componente Tasks que es el padre rebemos recibir 
      esta propiedad con "this.props.tasks"  */}
      <Tasks tasks={ this.state.tasks } />
    </div>  
  }
}

export default App;
