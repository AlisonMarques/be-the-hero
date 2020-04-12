import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import ListForUser from './pages/ListForUser';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props =>(
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: {from: props.location} }} />
        )
    )} />
);

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
                <Route path="/incidents/user" component={ListForUser} />
            </Switch>
        </BrowserRouter>
    )
}