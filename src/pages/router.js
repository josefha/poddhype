import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home'
import WebOnbording from './WebOnbording'

export default function AppWrapper() {
    return (
        <Router>
            <Switch>
                <Route exact path="/about">
                    <Home />
                </Route>
                <Route exact path="/">
                    <WebOnbording />
                </Route>
                {/* <Route
                path="/bli-en-partner"
                render={() => (<Home />)}
            />
            <Route
                exact={true}
                path="/"
                render={() => (<WebOnbording />)}
            /> */}
            </Switch>
        </Router >
    );
}