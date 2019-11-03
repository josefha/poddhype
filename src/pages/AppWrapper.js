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

import FadeTransitionRouter from '../common/components/FadeTransitionRouter'

const Login = () => <div>Login</div>

import Home from './Home'
import WebOnbording from './WebOnbording'

export default function AppWrapper() {
    return (
        <Router>
            <WebOnbording path="/bli-en-partner" />
            <Login path="/login" />
            <Home path="/" />
        </Router >
    );
}

