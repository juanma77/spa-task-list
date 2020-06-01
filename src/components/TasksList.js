import React, { Component } from 'react';

import Task from './Task';

import PropTypes from 'prop-types';

class TasksList extends Component {

    render(){
        /* Recorremos el arreglo de tareas y por cada iteración obtenemos un elemento Task; cada elemento es una tarea.
        Mandamos como propiedad "task" desde este componente TasksList, el cual es el padre, y debemos recibir esta propiedad en el hijo, que es el componente Task.Recibimos deleteTask desde el componente App para eliminar una tarea; la recibimos entonces después en el componente Task.
        Recibimos a su vez el método de updateTask*/
        return this.props.tasks.map(taskElement => <Task task={ taskElement } key={ taskElement.id } deleteTask={ this.props.deleteTask }  updateTask={ this.props.updateTask }/>
          
        )
    }

}

TasksList.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default TasksList;