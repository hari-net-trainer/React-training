import React, { Component } from 'react'

export default class TextInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "Wells Fargo"
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <>
                <h3>{this.state.text}</h3>
                Company : <input type="text" id="txt1" placeholder="Please Enter" />
                <br />
                Name: <input type="text" value={this.state.text} onChange={this.handleChange} />
                
            </>
        )
    }
}
