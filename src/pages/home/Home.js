import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Home = () => {
	// Get current User pass 'username' as props
	const [user, setUser] = useState({});
	// get username from URL params react-router
	const username = useParams().username;

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/users?username=${username}`);
			setUser(res.data);
		};
		fetchUser();
	}, [username]);
	// detect if on desktop or mobile
	const [isTablet, setTablet] = useState(window.innerWidth > 700);
	const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

	const updateMedia = () => {
		setTablet(window.innerWidth > 700);
		setDesktop(window.innerWidth > 1000);
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
						className="homeContainer"
						style={{
							backgroundImage: `url(${"/assets/images/feed-colors2.jpg"})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center fixed",
							backgroundSize: "cover",
						}}
					>
						<Sidebar />
						<Feed username={username} user={user} />
						<Rightbar />
					</div>
				</>
			) : isTablet ? (
				<>
					<Topbar />
					<div
						className="homeContainer"
						style={{
							backgroundImage: `url(${"/assets/images/feed-colors2.jpg"})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center fixed",
							backgroundSize: "cover",
						}}
					>
						<Sidebar />
						<Feed username={username} user={user} />
						<Footer />
					</div>
				</>
			) : (
				<>
					<Topbar />
					<div
						className="homeContainer"
						style={{
							backgroundImage: `url(${"/assets/images/feed-colors2.jpg"})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center fixed",
							backgroundSize: "cover",
						}}
					>
						<Feed username={username} user={user} />
						<Footer />
					</div>
				</>
			)}
		</>
	);
};

export default Home;
