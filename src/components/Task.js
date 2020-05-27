import React, { Component } from 'react';

import '../styles/Task.css'

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

        const button_styles = {
            borderRadius: '50%',
            fontSize: '15px'
        };

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

export default Task; 