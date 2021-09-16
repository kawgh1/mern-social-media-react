import "./Register.css";

export default function Register() {
	// public folder for photos
	const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<div
			className="register"
			style={{
				backgroundImage: `url(${"/assets/images/profile-colors.jpg"})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
				backgroundSize: "fill",
			}}
		>
			<div className="registerWrapper">
				<div className="registerLeft">
					<h3 className="registerLogo">reactsocial</h3>
					<span className="registerDesc">
						Connect with friends around the world!
					</span>
				</div>
				<div className="registerRight">
					<div className="registerBox">
						<input
							placeholder="Username"
							className="registerInput"
						/>
						<input placeholder="Email" className="registerInput" />
						<input
							placeholder="Password"
							className="registerInput"
						/>
						<input
							placeholder="Confirm Password"
							className="registerInput"
						/>
						<button className="registerButton">
							<img
								src={PublicFolder + "logo512.png"}
								alt="react"
								className="logo-img"
								style={{
									height: "29px",
									width: "29px",
									marginRight: "5px",
								}}
							/>
							Sign Up
						</button>
						<button className="registerRegisterButton">
							Log in
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
