import React from 'react'
import { LoginProvider } from '../LoginContext'
import { Route, Switch, } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import LoginPage from '../Components/LoginPage/Login';
import HomePage from '../Components/HomePage/HomePage'
import Modal from '../Components/Modal/Modal'


export default function LoginRoutes() {
    return (
        <LoginProvider>
            <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/home" component={HomePage}/>
                <Route past='/modal' component={Modal}/>
            </Switch>
            </Router>
        </LoginProvider>
    );
}