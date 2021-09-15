import React, { useState } from "react";
import "./Post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

function Post({ post }) {
	const [like, setLike] = useState(post.like);
	// has user liked the post?
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src={
								Users.filter(
									(user) => user.id === post?.userId
								)[0].profilePicture
							}
							alt=""
						/>
						<span className="postUsername">
							{
								Users.filter(
									(user) => user.id === post?.userId
								)[0].username
							}
						</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img className="postImg" src={post.photo} alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src="assets/like.png"
							onClick={likeHandler}
							alt=""
						/>
						<img
							className="likeIcon"
							src="assets/heart.png"
							onClick={likeHandler}
							alt=""
						/>
						<span className="postLikeCounter">
							{like > 0 ? (
								like === 1 ? (
									<p>{like} like</p>
								) : (
									<p>{like} likes</p>
								)
							) : (
								""
							)}
						</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">
							{post.comment > 0 ? (
								post.comment === 1 ? (
									<p>{post.comment} comment</p>
								) : (
									<p>{post.comment} comments</p>
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
