import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
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
						className="homeContainer"
						style={{
							backgroundImage: `url(${"/assets/images/feed-colors2.jpg"})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center fixed",
							backgroundSize: "cover",
						}}
					>
						<Sidebar />
						<Feed />
						<Rightbar />
					</div>
				</>
			) : (
				<>
					<Topbar />
					<Feed />
					<Footer />
				</>
			)}
		</>
	);
};

export default Home;
