import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './screens/home';
import About from './screens/about';

const Routes = () => {
    return(
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
        </Switch>
    )
};

export default Routes;