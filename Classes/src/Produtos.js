import React from 'react';

class Produtos extends React.Component{
    constructor(){
        super();
        this.state = {
            teste: 'teste'
        }
    }
    render(){
        return(
            <div>
                <h1>{this.props.titulo} : {this.state.teste}</h1>
            </div>
        )
    }
}

export default Produtos