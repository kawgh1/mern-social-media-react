import React, { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
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
						<Profile />
					</div>
				</>
			) : (
				<>
					<Topbar />
					<Profile />
					<Footer />
				</>
			)}
		</>
	);
}

export default Profile;
