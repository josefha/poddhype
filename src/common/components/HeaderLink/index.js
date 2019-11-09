import React from 'react';
import { Link } from "@reach/router"
// import "./HeaderLink.less"


export const HeaderLink = (props) => (
    <Link className="header-links"
        to={props.to}>
        {props.children}
    </Link >)