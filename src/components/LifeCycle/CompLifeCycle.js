import React, { Component } from 'react'

export default class CompLifeCycle extends Component {
    constructor(props){
        super(props)
        this.state={
            data:0,
            msg:'Initial data...'
        }
    }
    setNewNumber(e){
        this.setState({data:this.state.data+1})
    }

    render() {
        return (
            <div>
                <button 
                   onClick= {(e)=>{this.setNewNumber(e)}}>
                       Increment
                   </button>
                   <br/>
                   <Content myNumber={this.state.data}></Content>                   
            </div>
        )
    }
}

// child component
class Content extends React.Component{
    //1. constructor
    constructor(props){
        super(props)
        this.state={name:'Murthy'}
        console.log(`I am constructor with data: ${props.myNumber}`)  //0
    }
    //2: render
    render(){
        return(
            <>
               Data is : <h3 id="txt1">{this.props.myNumber}</h3>
               x : {this.state.x}
            </>
        )
    }

    //3. componentdidmount
    componentDidMount(){
        // fires only once, ajax calls,socket subscrition ,cutstom events registration
        console.log(`3. component did mount is fired  with data ${this.props.myNumber}`)
    }
    // 4.getDerivedStateFromProps
    static getDerivedStateFromProps(props,state){
        //live ajax calls for live data, validations
        console.log("state is "+state)        
        //add REST API reponse to current state
        return {"x":100}
    }

    // 5. shouldComponenetUpdate
    shouldComponentUpdate(props,state){
        console.log('Decides whether to re-render dom or not')
        console.log(`in shouldComponentUpdate ${state}`)
        if (props.myNumber>5){
            return true
        }else {
            return false
        }
    }
    //6 error handling
    componenDidCatch(err){
        // post this error to remote server with REST API and store in DB - Remote Logging
        // with axios.post(....), fetch.....
        console.log("Some error has occured...."+err.message)
    }
    //7.component did update
    componentDidUpdate(){
        console.log("REAL DOM updates possible here")
        console.log(document.getElementById('txt1').innerText)
        // npm install jquery 
    }
    //8. componentWillUnmount
    componentWillUnmount(){
        console.log("Cleaning up work do here")
        //unsubscribe web sockets, unregister custom events, cache=null
        //store state in localstorage - caching
    }



}

