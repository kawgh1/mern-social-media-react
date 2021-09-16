import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import UserProfile from "../../components/userProfile/UserProfile";
import "./Profile.css";

const Profile = () => {
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
					<div
						className="profile"
						style={{
							backgroundImage: `url(${"/assets/images/profile-colors8.webp"})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center",
							backgroundSize: "fill",
						}}
					>
						<Sidebar />
						<UserProfile />
						<Rightbar />
					</div>
				</>
			) : (
				<>
					<Topbar />
					<UserProfile />
					<Footer />
				</>
			)}
		</>
	);
};

export default Profile;
