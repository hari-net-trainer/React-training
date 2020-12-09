/* import {createStore,applyMiddleware,
  combineReducers} from 'redux'
import logger from 'redux-logger'
// npm install redux-devtools-extension --save-dev
import {composeWithDevTools} from 'redux-devtools-extension'

const userReducer= (state={},action)=>{
  switch(action.type){
     case 'CHANGE_NAME':{
       return state={...state,name:action.payload}
     }
     case "CHANGE_AGE":{
       return state={...state,age:action.payload}
     }
  }
  return state
}
const tweetReducer=(state=[],action)=>{
   return state;
}
const reducers=combineReducers({
  user:userReducer,
  tweets:tweetReducer
})

const store=createStore(reducers,
       composeWithDevTools(applyMiddleware(logger)))

store.subscribe( () =>{
  console.log("Store changed: "+store.getState())
})

store.dispatch({type:'CHANGE_NAME',payload:'Murthy'})
store.dispatch({type:'CHANGE_AGE',payload:50})
store.dispatch({type:'CHANGE_NAME',payload:'Raju'}) */

/* const reducer = function (state, action) {
  if (action.type === 'INC') {
    return state + action.payload
  }
  if (action.type === 'DEC') {
    return state - action.payload
  }
  return state
}

const store = createStore(reducer, 1)
store.subscribe(() => {
  console.log('Store state changed' + store.getState())
})

store.dispatch({ type: 'INC', payload: 1 })
store.dispatch({ type: 'INC', payload: 3 })
store.dispatch({ type: 'DEC', payload: 20 }) */

/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */


/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './SPA/App';

import './index.css';

import { BrowserRouter} from 'react-router-dom'
// npm install react-router-dom  --save
ReactDOM.render(
   <BrowserRouter>
       <App />
   </BrowserRouter>, document.getElementById('root'));

*/

/* import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './Lazy/App';


ReactDOM.render(<App />, document.getElementById('root')); */

/* 
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; // npm install redux-thunk --save
import { composeWithDevTools } from "redux-devtools-extension";
//npm install  axios --save
import axios from 'axios';

// state tree +Component= DOM tree
const initialState={
    fetching:false,
    fetched:false,
    user:[],
    error:null
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case "FETCH_USERS_START":{
            return {...state,fetching:true}      
        }
        case "FETCH_USERS_ERROR":{
            return {...state,fetching:false,error:action.payload}            
        }
        case "RECEIVED_USERS":{
            return {...state,
                       fetching:false,
                       fetched:true,
                       users:action.payload,
                    }         
        }
    }
    return state;
}

const store=createStore(reducer,
    composeWithDevTools (applyMiddleware(thunk,logger)));

store.subscribe(()=>console.log(store.getState()))

//thunk middleware expects only one dipatch
store.dispatch((dispatch)=>{
    //multiple actions occur with single action     
    dispatch({type:"FETCH_USERS_START"})

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then ( (response) =>{
       dispatch({type:"RECEIVED_USERS",payload:response.data})
    })
    .catch((error) =>{
      dispatch({type:"FETCH_USERS_ERROR",payload:error})
    })
})// end of code */

/* import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import {Provider} from 'react-redux'
import {store} from './ReduxDemo/Store/store'
import App from './ReduxDemo/Containers/App'

const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, app);
 */

 