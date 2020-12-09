import React,{useState} from 'react'

const Button = () => {
const [text, settext] = useState('Click me')

function handleClick(){
    return settext('Thanks');
}
return(
    <button onClick={handleClick}>{text}</button>
)
}

export default Button