import React from "react";
import Message from "./Message"
import './style.less';

const ChatFeed = (props) => {

    let messages = props.messages

    return (
        <div className="chat-window-feed">
            {messages.map((m) => {
                console.log(m)
                return (
                    <Message
                        data={m}
                    />)
            })}
        </div >
    )
}

export default ChatFeed
