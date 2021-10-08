import React from "react";
import "./Message.css";

function Message({ own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageBottom">1 hour ago</div>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                    alt=""
                />
                <p className="messageText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    );
}

export default Message;
