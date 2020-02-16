import React from "react";
import antd from "antd"
import { Link, navigate } from 'gatsby'

import ChatFeed from './ChatFeed'
import './style.less';

const { Spin } = antd;


const logo = require('../../common/assets/poddhype-logo-white-small.png')


class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebase: null,
            user: null,
            messages: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.setState({ messages: [{ text: "Hi are you still interseted in the job?" }, { text: "Yes, I am free all weekend", userText: true }, { text: "perfect what is your phone number?" }] })
    }

    render() {
        return (
            <>
                <div className="portal-header">
                    <span className="portal-logo" >
                        <Link to="/"><img alt="logo" src={logo} /></Link>
                    </span>
                </div>

                <div>
                    <h1>THIS IS SOON A CHAT OMG</h1>
                    <ChatFeed
                        messages={this.state.messages}
                    />

                </div>
            </>
        )
    }
}

export default ChatWindow
