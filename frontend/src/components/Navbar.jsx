import { Link } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import { useContext } from "react";
import "./Navbar.css";
import { Home } from "../assets/icons.jsx";

export default function Navbar() {
	const { user } = useContext(UserContext);
	const userName = user ? user.name : localStorage.getItem("userName");

	return (
		<div className="nav-container">
			<div className="nav-elements">
				<Link to="/">
					<Home />
				</Link>
				<Link to="/films">Films</Link>
				<Link to="/map">Map</Link>
			</div>
			{user ? (
				`Hi, ${userName}`
			) : (
				<Link to="/login">
					<button className="nav-btn">Log In</button>
				</Link>
			)}
		</div>
	);
}
