import React, { useEffect, useState } from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import axios from "axios";
// timeago.js
import { format } from "timeago.js";
// import { Posts } from "../../dummyData";
import { Link } from "react-router-dom";

function Post({ post }) {
	const [like, setLike] = useState(post.likes);
	// has user liked the post?
	const [isLiked, setIsLiked] = useState(false);
	// public folder for photos
	const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	// set User from DB
	const [user, setUser] = useState({});

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	//  get user from post from DB
	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/users?userId=${post.userId}`);
			setUser(res.data);
		};
		fetchUser();
	}, [post.userId]);

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<Link
							to={`profile/${user.username}`}
							style={{
								display: "flex",
								textDecoration: "none",
								alignItems: "center",
								color: "rgb(100, 52, 52)",
							}}
						>
							<img
								className="postProfileImg"
								// src={
								// 	Users.filter(
								// 		(user) => user.id === post?.userId
								// 	)[0].profilePicture
								// }
								src={
									user.profilePicture ||
									PublicFolder + "person/noAvatar.png"
								}
								alt=""
							/>

							<span className="postUsername">
								{user.username}
							</span>
						</Link>
						<span className="postDate">
							{format(post.createdAt)}
						</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img
						className="postImg"
						src={PublicFolder + post.img}
						alt=""
					/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src={PublicFolder + "images/like.png"}
							onClick={likeHandler}
							alt=""
						/>
						<img
							className="likeIcon"
							src={PublicFolder + "images/heart.png"}
							onClick={likeHandler}
							alt=""
						/>
						<span className="postLikeCounter">
							{post.likes.length > 0 ? (
								post.likes.length === 1 ? (
									<p>{post.likes.length} like</p>
								) : (
									<p>{post.likes.length} likes</p>
								)
							) : (
								""
							)}
						</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">
							{post.comments.length > 0 ? (
								post.comments.length === 1 ? (
									<p>{post.comments.length} comment</p>
								) : (
									<p>{post.comments.length} comments</p>
								)
							) : (
								""
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
