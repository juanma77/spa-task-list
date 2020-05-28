import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    // Esta función es para prevenir que se envíen los datos del formulario cuando damos clic en el botón de Enviar 
    onSubmit = event => {
        console.log("Sending...", event);
        event.preventDefault();
       
    }

    // El event.target.value sirve para estar escuchando y que se muestre en consola cada vez que se escribe dentro de los input
    onChange = event => {
        //console.log(event.target.value);
        this.setState({
            [event.target.name] :  event.target.value
        })
        console.log(event.target.name, event.target.value);
    }

    render(){
        return (
            <form onSubmit={ this.onSubmit }>
                <input className="form-inline" type="text" placeholder="Type a Task" onChange={this.onChange} value={this.state.title} name="title"/>
                <br/>
                <textarea className="form-group" placeholder="Type a Description" onChange={this.onChange} value={this.state.description} name="description">
                </textarea> <br/>
                <button className="btn btn-primary" type="submit">Create</button>
            </form>
        )
    }
}
