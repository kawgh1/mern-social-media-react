import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Profile({ profile }) {
	return (
		<div className="profile">
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
					<div className="profileInfo">
						<h4 className="profileInfoName">Safak Kocaoglu</h4>
						<span className="profileInfoDesc">
							Hello my friends!
						</span>
					</div>
				</div>
				{/* <div className="profileRightBottom">
								<Rightbar profile />
							</div> */}
				<h4 className="rightbarTitle">User information</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">City:</span>
						<span className="rightbarInfoValue">New York</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">From:</span>
						<span className="rightbarInfoValue">Madrid</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Relationship:</span>
						<span className="rightbarInfoValue">Single</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src="assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/2.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/3.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/4.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/5.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/6.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							John Carter
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
