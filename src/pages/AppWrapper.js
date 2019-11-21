import React from "react";


import { render } from "react-dom"
import { Router, Link } from "@reach/router"

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../../env'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const Login = () => <div>Login</div>

import Home from './Home'
import Brands from './Brands'
import WebOnbording from './WebOnbording'


export default function AppWrapper() {
    return (
        <Router>
            <WebOnbording path="/" />
            <Brands path="/brands" />
            <Login path="/login" />
            <Home path="/" />
        </Router >
    );
}

