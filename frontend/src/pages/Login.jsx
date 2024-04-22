import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CrocoHard from "../assets/croco_illustration2.png";
import { UserContext } from "../store/UserContext";

const Login = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:8080/api/user/login",
				{
					name,
					password,
				}
			);

			const userDetailsResponse = await axios.get(
				`http://localhost:8080/api/user/${response.data.userId}`
			);

			setUser({
				name: userDetailsResponse.data.name,
				userId: response.data.userId,
			});

			localStorage.setItem(
				"user",
				JSON.stringify({
					name: userDetailsResponse.data.name,
					userId: response.data.userId,
				})
			);

			localStorage.setItem("userName", userDetailsResponse.data.name);

			console.log("Login successful:", response.data);

			Cookies.set("authToken", response.data.token, {
				expires: 7,
				secure: true,
				sameSite: "strict",
			});

			navigate("/");
		} catch (error) {
			console.error("Login failed:", error.response || error.message);
		}
	};

	return (
		<section className="container">
			<div className="login-container">
				{/* <div className="circle circle-one"></div> */}
				<div className="form-container">
					<img
						src={CrocoHard}
						alt="illustration"
						className="illustration"
					/>
					<form onSubmit={handleSubmit}>
						<h2 className="opacity">Login</h2>
						<div>
							{/* <label htmlFor="name">name:</label> */}
							<input
								type="text"
								placeholder="USERNAME"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div>
							{/* <label htmlFor="password">Password:</label> */}
							<input
								type="password"
								placeholder="PASSWORD"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<button className="opacity" type="submit">
							Login
						</button>
					</form>
					<div className="register-forget opacity">
						<a href="/register">REGISTER</a>
					</div>
				</div>
				{/* <div className="circle circle-two"></div> */}
			</div>
			<div className="theme-btn-container"></div>
		</section>
	);
};

export default Login;
