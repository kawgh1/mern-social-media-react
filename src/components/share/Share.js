import React from "react";
import "./Share.css";
import { PermMedia, Room } from "@material-ui/icons";

import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
function Share() {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						className="shareProfileImg"
						src="/assets/person/1.jpeg"
						alt=""
					/>
					<input
						placeholder="What's in your mind Safak?"
						className="shareInput"
					/>
				</div>
				<hr className="shareHr" />
				<div className="shareBottom">
					<div className="shareOptions">
						<div className="shareOption">
							<PermMedia htmlColor="gold" className="shareIcon" />
							<span className="shareOptionText">Media</span>
						</div>
						<div className="shareOption">
							<Room htmlColor="coral" className="shareIcon" />
							<span className="shareOptionText">Location</span>
						</div>
						<div className="shareOption">
							<ContactsOutlinedIcon
								htmlColor="#156cc4"
								className="shareIcon"
							/>
							<span className="shareOptionText">Tag</span>
						</div>

						<div className="shareOption">
							<button className="shareButton">Share</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Share;
