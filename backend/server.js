const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");

const { db } = require("./models");
const router = require("./routes");

const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cookieSession({
		name: "session",
		keys: ["crocaine"],
		maxAge: 24 * 60 * 60 * 1000, // 24 hours
	})
);

app.use(
	cors({
		// origin: ["app-spring.sisc.ro"],
		origin: ["http://localhost:3000"],
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
		allowedHeaders: [
			"Content-Type",
			"Authorization",
			"Access-Control-Allow-Methods",
			"Access-Control-Request-Headers",
		],
		credentials: true,
		enablePreflight: true,
	})
);

app.use((req, res, next) => {
	// res.setHeader("Access-Control-Allow-Origin", "app-spring.sisc.ro");
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use("/api", router);

app.get("/reset", (req, res) => {
	db.sync({ force: true })
		.then(() => {
			res.status(200).send("database reset complete!");
		})
		.catch((err) => {
			res.status(500).send({
				message: "database reset error!",
				error: err.message,
			});
		});
});

app.use("/*", (req, res) => {
	res.status(200).send("MERGE SERVERU");
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
	console.log(`http://localhost:${port}`);
});
