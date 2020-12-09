import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
// npm install react-router-dom 

import { Home } from './Components/Home'
import { Customers } from './Components/Customers'
import { Login } from './Components/Login'
import Cars from './Components/Cars'
import { CarDetails } from './Components/CarDetails'
import { Greet } from './Components/Greet'

export const Layout = () => (
    <div>
        <nav >
            <Link className="nav" exact to='/'>Home</Link>
            <Link className="nav" exact to='/users'>Customers</Link>
            <Link className="nav" exact to='/cars'>Cars</Link>
            <Link className="nav" exact to='/login'>Login</Link>
            <Link className="nav" exact to="/greet/Murthy">Greet</Link>
        </nav>

        <main className="container">
            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/users" component={Customers} />
                <Route path="/login" component={Login} />
                <Route path="/cars" component={Cars} />
                <Route path="/carDetails/:carId" component={CarDetails} />
                <Route path='/greet/:username'
                    render={(props) => (<Greet {...props} />)} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </div>
)
const NotFound = () => <h1>Sorry... there is no matching route</h1>


