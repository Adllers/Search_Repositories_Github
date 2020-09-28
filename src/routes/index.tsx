import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Repository from '../pages/Repository';
import Dashboard from '../pages/Dashboard'; 

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/repositories/:repository+" component={Repository}/>
        </Switch>
    );
}

export default Routes;



