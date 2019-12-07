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
import Signup from './Signup'

const DescriptePodcast = () => <WebOnbording page={1} />


export default function AppWrapper() {
    return (
        <Router>
            <WebOnbording path="/bli-en-partner" />
            <TermsOfUse path="/terms-of-use" />
            <DescriptePodcast path="/podcasters/describe" />
            <Signup path="/podcasters/signup" />
            <Podcasters path="podcasters" />
            <Brands path="/brands" />
            <Home path="/" />
        </Router >
    );
}

