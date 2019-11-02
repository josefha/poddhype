import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from './../../env'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

import Home from './Home'
import WebOnbording from './WebOnbording'

export default function AppWrapper() {
    return (
        <Router>
            <Switch>
                <Route exact path="/asd">
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