import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Profile.css";

function Profile() {
	// detect if on desktop or mobile
	const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 800);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	return (
		<>
			{isDesktop ? (
				<>
					<Topbar />
					<div className="profile">
						<Sidebar />
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
									<h4 className="profileInfoName">
										Safak Kocaoglu
									</h4>
									<span className="profileInfoDesc">
										Hello my friends!
									</span>
								</div>
							</div>
							<div className="profileRightBottom">
								<Rightbar profile />
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<Topbar />
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
									<h4 className="profileInfoName">
										Safak Kocaoglu
									</h4>
									<span className="profileInfoDesc">
										Hello my friends!
									</span>
								</div>
							</div>
							<div className="profileRightBottom">
								<Rightbar profile />
							</div>
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
}

export default Profile;
