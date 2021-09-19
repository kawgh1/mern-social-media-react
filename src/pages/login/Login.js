import { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
	const email = useRef();
	const password = useRef();
	// public folder for photos
	const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

	// context from login
	const { user, isFetching, error, dispatch } = useContext(AuthContext);

	// login form submit
	const handleClick = (event) => {
		event.preventDefault();
		loginCall(
			{ email: email.current.value, password: password.current.value },
			dispatch
		);
	};

	//	console.log(user);

	return (
		<div
			className="login"
			style={{
				backgroundImage: `url(${
					PublicFolder + "profile-colors7.webp"
				})`,
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
						<button
							className="loginButton"
							disabled={isFetching}
							type="submit"
						>
							{isFetching ? (
								<CircularProgress color="white" size="25px" />
							) : (
								"Log In"
							)}
						</button>

						<Link
							to="/register"
							className="loginRegisterButtonLink"
						>
							<button className="loginRegisterButton">
								<img
									src={PublicFolder + "logo512.png"}
									alt="react"
									className="logo-img"
									style={{
										marginRight: "5px",
									}}
								/>
								Sign Up
							</button>
						</Link>
					</form>
					<span className="loginForgot">Forgot Password?</span>
				</div>
			</div>
		</div>
	);
}
