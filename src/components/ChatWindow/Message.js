import React from "react";
import './style.less';

const Message = (props) => {

    let text = props.data.text
    let isUserText = props.data.userText
    console.log(props);

    if (isUserText) {
        return (
            <div className="chat-window-message is-users-message">
                <p>{text}</p>
            </div >
        )
    } else {
        return (
            <div className="chat-window-message">
                <p>{text}</p>
            </div >
        )
    }
}

export default Message
