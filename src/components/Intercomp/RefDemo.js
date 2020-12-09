import React, { Component } from 'react'

export default class RefDemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.inputRef = React.createRef()
    }
    
componentDidMount(){
    this.inputRef.current.focus();
    alert(this.inputRef.current.value);
}

    render() {
        return (
            <div>
                <h2>Enter Name</h2>
                <input type="text" /><br/>
                <input type="text" ref={this.inputRef} value="Hello"/>
            </div> 
        )
    }
}
