import React, { Component } from 'react';

import '../styles/Task.css'

import PropTypes from 'prop-types';

class Task extends Component {

    paragraphStyle(){
        return {
            fontSize: '20px',
            // Si es verdadera la condición a la izquierda del "?" se pintara la fuente de verde, si es falsa se pintará de amarillo 
            color: this.props.task.done ? 'green' : 'red',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){

        {/* Usamos destructuring para acortar la escritura de las propiedades */}
        const { task } = this.props;  

        return <div className="main-div">
            { /* Aquí debemos de recibir la propiedad "task" que mandamos desde el componente padre TaskList". Debemos usar el binding en deleteTask.bind(this, task.id) para que "this" no pierda el contexto al ejecutarse, puesto que si no lo hacemos ya no haría referencia al objeto de la clase que contiene el método sino que adopta el valor de "undefined".
            Recibimos el metodo updateTask en el checbox desde el componente TasksList */ }
            <p style={this.paragraphStyle()}>
            { task.title } - { task.description } - { task.done }  { task.id } </p>
            <input type="checkbox" onChange={ this.props.updateTask.bind(this, task.id) }/> 
            <button type="button" className="btn btn-danger" style={ button_styles } onClick={ this.props.deleteTask.bind(this, task.id) } >Done</button>
        </div>
    }
}

const button_styles = {
    borderRadius: '50%',
    fontSize: '15px'
};

// Los propTypes sirven para especificar el tipo de datos de props que estamos pasando entre componentes; para evitar que si esperamos recibir un objeto de tipo task no recibamos un arreglo 
Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task; 