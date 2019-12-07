import React from "react";
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const FadeTransitionRouter = props => (
    <Location>
        {({ location }) => (
            <TransitionGroup className="transition-group">
                <CSSTransition key={location.key} classNames="fade" timeout={500}>
                    <Router location={location} className="router">
                        {props.children}
                    </Router>
                </CSSTransition>
            </TransitionGroup>
        )}
    </Location>
);

export default FadeTransitionRouter
