import React, { Component } from 'react'

export default class Button extends Component {
    state = {text: 'Click me'}
    handleClick = (e) =>{
        this.setState({text:'Thanks'})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.text}
                </button>
            </div>
        )
    }
}


