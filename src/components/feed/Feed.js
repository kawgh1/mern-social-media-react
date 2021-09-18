import "./Feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
// import { Posts } from "../../dummyData";
import axios from "axios";

import React, { useEffect, useState } from "react";

function Feed({ username, user }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = username
				? await axios.get("/posts/profile/" + username)
				: await axios.get("/posts/timeline/" + user._id);
			// console.log(response);
			setPosts(response.data);
		};
		fetchPosts();
	}, [username, user]);

	return (
		<div
			className="feed"
			style={{
				backgroundImage: `url(${"/assets/images/feed-colors2.jpg"})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
			}}
		>
			<div className="feedWrapper">
				<Share />
				{/* {Posts.map((post) => (
					<Post key={post.id} post={post} />
				))} */}
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</div>
		</div>
	);
}

export default Feed;
