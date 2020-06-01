import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    // Este metodo se ejecuta antes de que el componente se monte, esto es, que se visualice en pantalla             El async es para indicar que estamos haciendo una operación asíncrona y el await para indicar que el fetch va a tomar tiempo resolverse (esto es como una promesa); el fetch sirve para hacer peticiones http hacia una api
    async componentDidMount(){
        const res = await fetch('http://jsonplaceholder.typicode.com/posts');
        //console.log(res);

        const data = await res.json();
        console.log(data);
        this.setState({
            posts: data
        })
    }

    // Por cada post recorremos el arreglo y retornamos un div con un h1 y un p
    render() {
        return (
            <div>
                <h1>Posts </h1>
                {
                    this.state.posts.map(post =>{
                        return <div key={ post.id }>
                            <h1>{ post.title }</h1>
                            <p> {post.body} </p>

                        </div>
                    })
                }
            </div>
        )
    }
}
