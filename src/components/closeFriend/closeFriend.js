import "./closeFriend.css";

export default function CloseFriend({ user }) {
	// public folder for photos
	const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

	return (
		<li className="sidebarFriend">
			<img
				className="sidebarFriendImg"
				src={PublicFolder + user.profilePicture}
				alt=""
			/>
			<span className="sidebarFriendName">{user.username}</span>
		</li>
	);
}
