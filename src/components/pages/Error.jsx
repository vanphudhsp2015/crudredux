import React, { Component } from 'react';

class Error extends Component {
    render() {
        return <p className="container column">{this.props.message ? this.props.message : 'Houve um problema ao retornar a lista de dados!'}</p>;

    }
}

export default Error;