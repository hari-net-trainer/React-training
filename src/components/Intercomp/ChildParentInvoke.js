import React, { Component } from 'react'

export default class ChildParentInvoke extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: 'Initial data'
        }
    }

    updateState(event) {
        this.setState({data: event.target.value});
    }

    render() {
        return (
            <>
                <h4>Parent Component</h4>
                <h5>{this.state.data}</h5>
                <br/>
                <h4>Chaild Component</h4>
                <Content data={this.state.data} UpdateData={(event) => {this.updateState(event)}}/>
            </>
        )
    }
}

const Content = props => {
    return (
        <>
            <h5>Enter your essage</h5>
            <input type="text" value="Wellsa Fargo" />
            <input type="text" value={props.data} onChange={props.UpdateData} />
        </>
    )
}
