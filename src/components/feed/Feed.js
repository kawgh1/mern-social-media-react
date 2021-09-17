import "./Feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
// import { Posts } from "../../dummyData";
import axios from "axios";

import React, { useEffect, useState } from "react";

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get(
				"posts/timeline/6139b4da7ff1b5eea981efdb"
			);
			// console.log(response);
			setPosts(response.data);
		};
		fetchPosts();
	}, []);

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
