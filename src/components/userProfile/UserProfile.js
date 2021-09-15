import { CallReceived } from "@material-ui/icons";
import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import Post from "../post/Post";
import Share from "../share/Share";
import "./UserProfile.css";
import { Posts } from "../../dummyData";

function Profile() {
	return (
		<div
			className="profile"
			style={{
				backgroundImage: `url(${"/assets/profile-colors8.webp"})`,
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
							src="assets/post/3.jpeg"
							alt=""
						/>
						<img
							className="profileUserImg"
							src="assets/person/7.jpeg"
							alt=""
						/>
					</div>
					<div className="profileInfoTop">
						<h4 className="profileInfoName">Safak Kocaoglu</h4>
						<span className="profileInfoDesc">
							Hello my friends!
						</span>
					</div>
				</div>
				{/* <div className="profileRightBottom">
								<Rightbar profile />
							</div> */}
				<div className="profileRightBottom">
					<h4 className="profileTitle">User Info</h4>
					<div className="profileInfoBottom">
						<div className="profileInfoItem">
							<span className="profileInfoKey">City:</span>
							<span className="profileInfoValue">New York</span>
						</div>
						<div className="profileInfoItem">
							<span className="profileInfoKey">From:</span>
							<span className="profileInfoValue">Madrid</span>
						</div>
						<div className="profileInfoItem">
							<span className="profileInfoKey">
								Relationship:
							</span>
							<span className="profileInfoValue">Single</span>
						</div>
					</div>
					<h4 className="profileTitle">Friends</h4>
					<div className="profileFollowings">
						<div className="profileFollowing">
							<img
								src="assets/person/1.jpeg"
								alt=""
								className="profileFollowingImg"
							/>
							<span className="profileFollowingName">
								Joasdfhn Carasdfter
							</span>
						</div>
						<div className="profileFollowing">
							<img
								src="assets/person/2.jpeg"
								alt=""
								className="profileFollowingImg"
							/>
							<span className="profileFollowingName">
								John Caasdfasfasfasfrter
							</span>
						</div>
						<div className="profileFollowing">
							<img
								src="assets/person/3.jpeg"
								alt=""
								className="profileFollowingImg"
							/>
							<span className="profileFollowingName">
								Jasdfasdfohn Carter
							</span>
						</div>
						<div className="profileFollowing">
							<img
								src="assets/person/4.jpeg"
								alt=""
								className="profileFollowingImg"
							/>
							<span className="profileFollowingName">
								John Carter
							</span>
						</div>
						<div className="profileFollowing">
							<img
								src="assets/person/5.jpeg"
								alt=""
								className="profileFollowingImg"
							/>
							<span className="profileFollowingName">
								John Carter
							</span>
						</div>
						<div className="profileFollowing">
							<img
								src="assets/person/6.jpeg"
								alt=""
								className="profileFollowingImg"
							/>
							<span className="profileFollowingName">
								John Carter
							</span>
						</div>
					</div>
				</div>
				<hr />
				{/* Feed */}
				<div className="feedWrapper">
					{Posts.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Profile;
