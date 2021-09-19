import React, { useContext } from "react";
import "./Share.css";
import { PermMedia, Room } from "@material-ui/icons";

import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
function Share() {
	const { user } = useContext(AuthContext);
	// public folder for photos
	const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<Link to={`/profile/${user.username}`}>
						<img
							src={
								user.profilePicture
									? PublicFolder + user.profilePicture
									: PublicFolder + "person/noAvatar.png"
							}
							alt=""
							className="shareProfileImg"
						/>
					</Link>
					<input
						placeholder={
							"What's on your mind " + user.username + "?"
						}
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
