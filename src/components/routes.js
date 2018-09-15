import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './screens/home';
import About from './screens/about';

import Dashboard from './screens/dashboard';

import SignUp from './screens/sign-up';

const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/sign-up' component={SignUp}/>
        </Switch>
    )
};

export default Routes;