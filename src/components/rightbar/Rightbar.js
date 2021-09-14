import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

import React from "react";

function Rightbar({ profile }) {
	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img className="birthdayImg" src="assets/gift.png" alt="" />
					<span className="birthdayText">
						<b>Pola Foster</b> and <b>3 other friends</b> have a
						birhday today.
					</span>
				</div>
				<img className="rightbarAd" src="assets/ad.png" alt="" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((user) => (
						<Online key={user.id} user={user} />
					))}
				</ul>
			</>
		);
	};

	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<HomeRightbar />
			</div>
		</div>
	);
}

export default Rightbar;
