import React from "react";

import { Router } from "@reach/router"

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../../env'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

import Home from './Home'
import Brands from './Brands'
import WebOnbording from './WebOnbording'
import TermsOfUse from './TermsOfUse'
import Podcasters from './Podcasters'


export default function AppWrapper() {
    return (
        <Router>
            <WebOnbording path="/bli-en-partner" />
            <TermsOfUse path="/terms-of-use" />
            <Podcasters path="/podcasters" />
            <Brands path="/brands" />
            <Home path="/" />
        </Router >
    );
}

