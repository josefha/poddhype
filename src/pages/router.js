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
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/bli-en-partner">
                    <WebOnbording />
                </Route>
            </Switch>
        </Router >
    );
}