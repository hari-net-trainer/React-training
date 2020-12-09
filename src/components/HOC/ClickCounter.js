//clickCounter.js
import React, { Component } from 'react'
import updatedComponent from './withIncrement'

export class ClickCounter extends Component {
    
    render() {
        return (
            <div>
                const {count,increment}=this.props
                <button onClick={increment}>
                     Button Clicked {count} times
                </button>
            </div>
        )
    }
}

export default updatedComponent(ClickCounter)
