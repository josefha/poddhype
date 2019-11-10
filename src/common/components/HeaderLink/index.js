import React from 'react';
import { Link } from "@reach/router"
import './headerLink.less'


export const HeaderLink = (props) => {
    return (
        props.type == 'normal' ? (
            <a href={props.to} className="header-link">
                {props.children}
            </a>)
            :
            (
                <Link className="header-link"
                    to={props.to}>
                    {props.children}
                </Link >)
    )
}