import React from "react";
import "./Conversation.css";

function Conversation() {
    return (
        <div className="conversation">
            <img
                className="conversationImg"
                src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                alt=""
            />
            <span className="conversationName">John Doe</span>
        </div>
    );
}

export default Conversation;
