import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
// React Router
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
	const { user } = useContext(AuthContext);
	return (
		<Router>
			<Switch>
				{/* <Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/profile/:username">
					<Profile />
				</Route> */}
				<Route exact path="/">
					{user ? <Home /> : <Register />}
				</Route>
				<Route path="/login">
					{user ? <Redirect to="/" /> : <Login />}
				</Route>
				<Route path="/register">
					{user ? <Redirect to="/" /> : <Register />}
				</Route>
				<Route path="/profile/:username">
					{user ? <Profile /> : <Login />}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
