import React, { Component } from 'react';

class Task extends Component {

    render(){

        {/* Usamos destructuring para acortar la escritura de las propiedades */}
        const { task } = this.props;  

        return <div>
            { /* Aquí debemos de recibir la propiedad "task" que mandamos desde el componente padre TaskList" */ }
            { task.title } - { task.description } - { task.done }  { task.id } 
            <input type="checkbox"/> 
            <button type="button" className="btn btn-danger">Done</button>
        </div>
    }

}

export default Task; 