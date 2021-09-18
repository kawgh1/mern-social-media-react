import { useRef } from "react";
import "./Login.css";

export default function Login() {
	// public folder for photos
	const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

	// login form submit
	const handleClick = (event) => {
		event.preventDefault();
	};

	const email = useRef();
	const password = useRef();
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
					<form className="loginBox" onSubmit={handleClick}>
						<input
							placeholder="Email"
							className="loginInput"
							type="email"
							required
							ref={email}
						/>
						<input
							placeholder="Password"
							className="loginInput"
							type="password"
							required
							minLength="6"
							ref={password}
						/>
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
					</form>
					<span className="loginForgot">Forgot Password?</span>
				</div>
			</div>
		</div>
	);
}
