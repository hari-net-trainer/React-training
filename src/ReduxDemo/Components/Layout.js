import React, { Component } from 'react'
import Clock from './Clock'
import { Home } from './Home'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Home/>
                <hr/>
                <Clock/>
            </div>
        )
    }
}
