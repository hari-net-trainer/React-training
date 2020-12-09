import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             company: "Wells Fargo"
        }
    }
    
    render() {
        return (
            <div>
                <h1 className="bg-success text-white">{this.state.company}</h1>
                <h5>{this.props.message}</h5>
            </div>
        )
    }
}

Header.defaultProps={
    message:"Learning React"
}
