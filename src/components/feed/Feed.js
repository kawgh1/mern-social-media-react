import "./Feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
import { Posts } from "../../dummyData";

import React from "react";

function Feed() {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{Posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}

export default Feed;
