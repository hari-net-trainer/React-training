// HOC is a design pattern where a function takes
// other function or component as an argument
// and returns a new enhanced component
// with additional state and functionality (Logic) - Ajax logic

//const enhancedComponent=HOC(orginalComponent)
//withIncrement.js
// export default connect("murthy",func)(EmployeeComponent)
import React from 'react'

const updatedComponent= (originalComponent) =>{
    class NewComponent extends React.Component{
        state={count:0}
        increment=()=>{
             this.setState(prevState =>{
                 return {count:prevState+1}
             })
        }
        componentDidMount(){
            // fetch api logic or axios  and update state
            // dynamic themes 

        }
        render(){
            return(
                <originalComponent name="Murthy"
                count={this.state.count}
                increment ={this.increment}
                />
            )
        }
    }
    return NewComponent
}
export default updatedComponent