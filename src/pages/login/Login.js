import "./Login.css";

export default function Login() {
	// public folder for photos
	const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<div
			className="login"
			style={{
				backgroundImage: `url(${"/assets/images/profile-colors7.webp"})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center fixed",
				backgroundSize: "cover",
			}}
		>
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">reactsocial</h3>
					<span className="loginDesc">
						Connect with friends around the world!
					</span>
				</div>
				<div className="loginRight">
					<div className="loginBox">
						<input placeholder="Email" className="loginInput" />
						<input placeholder="Password" className="loginInput" />
						<button className="loginButton">
							<img
								src={PublicFolder + "logo512.png"}
								alt="react"
								className="logo-img"
								style={{
									marginRight: "5px",
								}}
							/>
							Log In
						</button>

						<button className="loginRegisterButton">Sign Up</button>
					</div>
					<span className="loginForgot">Forgot Password?</span>
				</div>
			</div>
		</div>
	);
}
