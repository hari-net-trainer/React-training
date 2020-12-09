//HoverCounter.js
import React, { Component } from 'react'
import udpatedComponent from './withIncrement'
export class HoverCounter extends Component {
 
    render() {
        return (
            <div>
                const {count,increment}=this.props
                <h2 onMouseOver={increment}>
                    Hovered {count} times
                </h2>
            </div>
        )
    }
}

export default updatedComponent(HoverCounter)

//parent = increment, state
// ClickConter     HoverCounter
// call parent method and state  (event handling)

// HOC = Higher Order component
