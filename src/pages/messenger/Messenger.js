import React, { useEffect, useState } from "react";
import Conversation from "../../components/conversations/Conversation";
import Footer from "../../components/footer/Footer";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import "./Messenger.css";

function Messenger() {
    // public folder for photos
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    // detect if on desktop or mobile
    const [isTablet, setTablet] = useState(window.innerWidth > 700);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

    const updateMedia = () => {
        setTablet(window.innerWidth > 700);
        setDesktop(window.innerWidth > 1000);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    return (
        <>
            {isDesktop ? (
                <>
                    <Topbar />
                    <div
                        className="messenger"
                        style={{
                            backgroundImage: `url(${
                                PublicFolder + "profile-colors6.webp"
                            })`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center fixed",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="chatMenu">
                            <div className="chatMenuWrapper">
                                <input
                                    type="text"
                                    placeholder="Search for friends"
                                    className="chatMenuInput"
                                />
                                <div className="chatConversationWrapper">
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                </div>
                            </div>
                        </div>
                        <div className="chatBox">
                            <div className="chatBoxWrapper">
                                <div className="chatBoxTop">
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                </div>
                                <div className="chatBoxBottom">
                                    <div className="chatMessageContainer">
                                        <textarea
                                            className="chatMessageInput"
                                            name=""
                                            placeholder="Write something..."
                                            id=""
                                            cols="30"
                                            rows="10"
                                        ></textarea>
                                        <button className="chatSubmitButton">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chatOnline">
                            <div className="chatOnlineWrapper">online</div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Topbar />
                    <div
                        className="messenger"
                        style={{
                            backgroundImage: `url(${
                                PublicFolder + "profile-colors6.webp"
                            })`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center fixed",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="chatMenu">
                            <div className="chatMenuWrapper">
                                <input
                                    type="text"
                                    placeholder="Search for friends"
                                    className="chatMenuInput"
                                />
                                <div className="chatConversationWrapper">
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                    <Conversation />
                                </div>
                            </div>
                        </div>
                        <div className="chatBox">
                            <div className="chatBoxWrapper">
                                <div className="chatBoxTop">
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                    <Message />
                                    <Message own={true} />
                                </div>
                                <div className="chatBoxBottom">
                                    <div className="chatMessageContainer">
                                        <textarea
                                            className="chatMessageInput"
                                            name=""
                                            placeholder="Write something..."
                                            id=""
                                            cols="30"
                                            rows="10"
                                        ></textarea>
                                        <button className="chatSubmitButton">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
}

export default Messenger;
