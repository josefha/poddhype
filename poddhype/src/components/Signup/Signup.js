
import '../WebOnbording/style.less';
import React from 'react';
import * as firebase from "firebase/app";

import WebOnbording from '../WebOnbording'


export default class Signup extends React.Component {

    render() {
        return <WebOnbording page={0} />
    }
}