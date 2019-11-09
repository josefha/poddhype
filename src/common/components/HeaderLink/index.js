import React from 'react';
import { Link } from "@reach/router"
import './headerLink.less'


export const HeaderLink = (props) => (
    <Link className="header-link"
        to={props.to}>
        {props.children}
    </Link >)