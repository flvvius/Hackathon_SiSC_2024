import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CrocoHard from "../assets/croco_illustration2.png";

const Register = () => {
	const [name, setName] = useState(""); // Change from email to name
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:8080/api/user/register",
				{
					name,
					password,
				}
			);
			console.log("Register successful:", response.data);

			Cookies.set("authToken", response.data.token, {
				expires: 7,
				secure: true,
				sameSite: "strict",
			});

			navigate("/");
		} catch (error) {
			console.error("Register failed:", error.response || error.message);
		}

		console.log("Submitting", { name, password }); // Log name instead of email
	};

	return (
		<section className="container">
			<div className="login-container">
				{/* <div className="circle circle-one"></div> */}
				<div className="form-container">
                	<img src={CrocoHard} alt="illustration" className="illustration" />
					<form onSubmit={handleSubmit}>
						<h2 className="opacity">Register</h2>
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
						<button className="opacity" type="submit">Register</button>
					</form>
					<div className="register-forget opacity">
                    <a href="/login">LOG IN</a>
                </div>
				</div>
				{/* <div className="circle circle-two"></div> */}
			</div>
			<div className="theme-btn-container"></div>
		</section>
	);
};

export default Register;