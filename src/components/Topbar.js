import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./Topbar.css";

const Topbar = () => {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Reactsocial</span>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<Search />
					<input
						type="text"
						placeholder="Search for your friends!"
						className="searchInput"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink">Timeline</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person />
						<span className="topbarIconBage">1</span>
					</div>
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBage">2</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBage">1</span>
					</div>
				</div>
				<img src="/assets/person/1.jpeg" alt="" />
			</div>
		</div>
	);
};

export default Topbar;
