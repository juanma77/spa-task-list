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
            { /* Aquí debemos de recibir la propiedad "task" que mandamos desde el componente padre TaskList" */ }
            <p style={this.paragraphStyle()}>
            { task.title } - { task.description } - { task.done }  { task.id } </p>
            <input type="checkbox"/> 
            <button type="button" className="btn btn-danger" style={ button_styles }>Done</button>
        </div>
    }
}

const button_styles = {
    borderRadius: '50%',
    fontSize: '15px'
};

// Los propTypes sirven para especificar el tipo de datos de props que estamos pasando entre componentes; para evitar que si esperamos recibir un objeto de tipo task no recibamos un arrelglo o un número por ejemplo 
Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task; 