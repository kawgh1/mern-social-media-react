import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Home, Mail, Notifications, Search } from "@material-ui/icons";

function Footer() {
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
		<div>
			{isDesktop ? (
				""
			) : (
				<div className="footer">
					<div className="footer__options">
						{/* <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" /> */}
						<div className="footerIcons">
							<div className="footerIconItem">
								<Home
									style={{ height: "30px", width: "30px" }}
								/>
							</div>
							<div className="footerIconItem">
								<Search
									style={{ height: "30px", width: "30px" }}
								/>
							</div>
							<div className="footerIconItem">
								<Notifications
									style={{ height: "30px", width: "30px" }}
								/>
								<span className="footerIconBadge">1</span>
							</div>
							<div className="footerIconItem">
								<Mail
									style={{ height: "30px", width: "30px" }}
								/>
								<span className="footerIconBadge">1</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Footer;
