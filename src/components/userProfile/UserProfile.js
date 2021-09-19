import React, { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import "./UserProfile.css";
// import { Posts } from "../../dummyData";
// import Feed from "../feed/Feed";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
	Add,
	AddCircleOutlineRounded,
	PlusOneOutlined,
	PlusOneRounded,
	Remove,
} from "@material-ui/icons";

function UserProfile() {
	const [posts, setPosts] = useState([]);
	const [user, setUser] = useState({});
	// public folder for photos
	const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	// set User's friends
	const [friends, setFriends] = useState([]);
	// current User
	const { user: currentUser, dispatch } = useContext(AuthContext);
	// following this user?
	const [followed, setFollowed] = useState(
		currentUser.following.includes(user?.id)
	);

	// get username from URL params react-router 'profile/jane' - username 'jane'
	const username = useParams().username;

	// get user by username - pass username 'jane' get back user 'jane' object
	// set user to display user properties
	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/users?username=${username}`);
			setUser(res.data);
		};
		fetchUser();
	}, [username]);

	console.log("user is ", user.username);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = username
				? await axios.get("/posts/profile/" + username)
				: await axios.get("/posts/timeline/" + user._id);
			// console.log(response);
			setPosts(
				response.data.sort((p1, p2) => {
					return new Date(p2.createdAt) - new Date(p1.createdAt);
				})
			);
		};
		fetchPosts();
	}, [username, user._id]);

	// get User's friends - who they are following
	useEffect(() => {
		const getFriends = async () => {
			try {
				const friendList = await axios.get(
					"/users/friends/" + user._id
				);
				setFriends(friendList.data);
			} catch (err) {
				console.log(err);
			}
		};
		getFriends();
	}, [user]);

	// Follow / Unfollow
	const handleClick = async () => {
		try {
			if (followed) {
				await axios.put(`/users/${user._id}/unfollow`, {
					userId: currentUser._id,
				});
				dispatch({ type: "UNFOLLOW", payload: user._id });
			} else {
				await axios.put(`/users/${user._id}/follow`, {
					userId: currentUser._id,
				});
				dispatch({ type: "FOLLOW", payload: user._id });
			}
			setFollowed(!followed);
		} catch (err) {}
	};

	// console.log(
	// 	"user city",
	// 	user.city,
	// 	"user from",
	// 	user.from,
	// 	"user relationship",
	// 	user.relationship
	// );

	return (
		<div
			className="profile"
			style={{
				backgroundImage: `url(${"/assets/images/profile-colors8.webp"})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
				backgroundSize: "fill",
			}}
		>
			<div className="profileRight">
				<div className="profileRightTop">
					<div className="profileCover">
						<img
							className="profileCoverImg"
							src={
								user.coverPicture
									? PublicFolder + user.coverPicture
									: PublicFolder + "person/noCover.png"
							}
							alt="User Profile Cover"
						/>
						<img
							className="profileUserImg"
							src={
								user.profilePicture
									? PublicFolder + user.profilePicture
									: PublicFolder + "person/noAvatar.png"
							}
							alt="User Profile Pic"
						/>
					</div>
					<div className="followDiv">
						{/*  Follow Button */}
						{user.username !== currentUser.username && (
							<button
								className="profileFollowButton"
								onClick={handleClick}
							>
								{followed ? "Following" : "Follow"}
							</button>
						)}
					</div>
					<div className="profileInfoTop">
						<div className="profileInfo">
							<h4 className="profileInfoName">{user.username}</h4>
							<span className="profileInfoDesc">{user.desc}</span>
						</div>
					</div>
				</div>
				{/* <div className="profileRightBottom">
								<Rightbar profile />
							</div> */}
				<div className="profileRightBottom">
					<div className="profileInfoBottom">
						<h4 className="profileTitle">User Info</h4>
						<div className="profileInfoItem">
							<span className="profileInfoKey">City:</span>
							<span className="profileInfoValue">
								{user.city}
							</span>
						</div>
						<div className="profileInfoItem">
							<span className="profileInfoKey">From:</span>
							<span className="profileInfoValue">
								{user.from}
							</span>
						</div>
						<div className="profileInfoItem">
							<span className="profileInfoKey">Email:</span>
							<span className="profileInfoValue">
								{user.email}
							</span>
						</div>
						<div className="profileInfoItem">
							<span className="profileInfoKey">
								Relationship:
							</span>
							<span className="profileInfoValue">
								{user.relationship === 1
									? "Single"
									: user.relationship === 2
									? "Married"
									: "-"}
							</span>
						</div>
					</div>

					<div className="profileFollowings">
						<h4 className="profileTitle">Friends</h4>
						{friends.map((friend) => (
							<Link
								to={"/profile/" + friend.username}
								style={{
									textDecoration: "none",
									color: "black",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}
								key={friend._id}
							>
								<div className="profileFollowing">
									<img
										src={
											friend.profilePicture
												? PublicFolder +
												  friend.profilePicture
												: PublicFolder +
												  "person/noAvatar.png"
										}
										alt=""
										className="profileFollowingImg"
									/>
									<span
										className="profileFollowingName"
										style={{
											fontWeight: "bold",
										}}
									>
										{friend.username}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
				<hr
					style={{
						width: "90%",
						margin: "0px auto",
						color: "whitesmoke",
					}}
				/>
				{/* Feed */}
				<div className="feedWrapper">
					{/* Only display current User's posts on Profile page */}
					{posts.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
