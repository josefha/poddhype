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

var firebaseConfig = {
    apiKey: "AIzaSyCpaZX6mSGh5OkAZe7mu8n9buqeflF_GCg",
    authDomain: "poddhype.firebaseapp.com",
    databaseURL: "https://poddhype.firebaseio.com",
    projectId: "poddhype",
    storageBucket: "poddhype.appspot.com",
    messagingSenderId: "58860855482",
    appId: "1:58860855482:web:4672295a4f07421dd9e283",
    measurementId: "G-6GZ9X25W64"
};

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