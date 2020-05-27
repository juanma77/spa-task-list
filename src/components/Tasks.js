import React, { Component } from 'react';

class Tasks extends Component {

    render(){
        /* Aquí mostramos el "title" de cada task; usamos la función map para iterar el arreglo; esta función nos regresa un arreglo nuevo, nunca el mismo que iteramos. Por cada elemento que generamos cuando recorremos elementos de un array el debemos de ponerle una propiedad "key" */
        return this.props.tasks.map(
            e => <p key={e.title}>{ e.title } - { e.description } - { e.done }  { e.id } 
            <input type="checkbox"/> 
            <button type="button" class="btn btn-danger">Done</button>
            </p>
           
        )
    }

}

export default Tasks;