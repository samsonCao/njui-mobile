import React, { Component } from 'react'; // eslint-disable-line
import { Switch, HashRouter as Router, Route, IndexRoute, Link } from 'react-router-dom'; // eslint-disable-line

import {
    HomePage,
    ButtonPage,
    IconPage,
    CellPage,
    NavBarPage,
    ToastPage,
    TagPage
} from './pages';

const routes = [
    { path: '/', component: HomePage, exact: true },
    { path: '/button', component: ButtonPage },
    { path: '/icon', component: IconPage },
    { path: '/cell', component: CellPage },
    { path: '/nav-bar', component: NavBarPage },
    { path: '/toast', component: ToastPage },
    { path: '/tag', component: TagPage }
];

const App = (props, context) =>
    (
        <Router>
            <Switch>
                {
                    routes.map(route => (
                        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                    ))
                }
            </Switch>
        </Router>
    );

export default App;
