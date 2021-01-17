import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignIn from './components/SignIn';


export default (
    <Route path="/" component={App}>
        <Route path="/some/where" component={SignIn} />
    </Route>
);