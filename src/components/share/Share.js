import React, { useContext, useRef, useState } from "react";
import "./Share.css";
import { PermMedia, Room, StorefrontOutlined } from "@material-ui/icons";

import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
function Share() {
	const { user } = useContext(AuthContext);
	// what user types in to post
	const desc = useRef();
	// photo/video to upload
	const [file, setFile] = useState(null);
	// public folder for photos
	const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

	const submitHandler = async (event) => {
		event.preventDefault();
		const newPost = {
			userId: user._id,
			desc: desc.current.value,
		};

		try {
			await axios.post("/posts", newPost);
		} catch (error) {}
	};
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
							alt="ProfilePic"
							className="shareProfileImg"
						/>
					</Link>
					<input
						placeholder={
							"What's on your mind " + user.username + "?"
						}
						className="shareInput"
						ref={desc}
					/>
				</div>
				<hr className="shareHr" />
				<form className="shareBottom" onSubmit={submitHandler}>
					<div className="shareOptions">
						<label htmlFor="file" className="shareOption">
							<PermMedia htmlColor="gold" className="shareIcon" />
							<span className="shareOptionText">Media</span>
							<input
								style={{ display: "none" }}
								type="file"
								id="file"
								accept=".png, .jpeg, .jpg, .webp"
								onChange={(event) =>
									setFile(event.target.files[0])
								}
							/>
						</label>
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
							<button className="shareButton" type="submit">
								Share
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Share;
