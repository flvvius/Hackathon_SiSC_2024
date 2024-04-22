import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookingPage from "./pages/BookingPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import RootLayoutPage from "./pages/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import MapPage from "./pages/MapPage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import SeatsLayout from "./components/SeatsLayout.jsx";
import { UserProvider } from "./store/UserContext.jsx";
import { useState } from "react";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayoutPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <LandingPage />,
			},
			{
				path: "/films",
				element: <BookingPage />,
			},
			{
				path: "/map",
				element: <MapPage />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/films/booking/:idFilm",
				element: <SeatsLayout />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);

export default function App() {
	const [user, setUser] = useState(null);

	return (
		<UserProvider value={{ user, setUser }}>
			<RouterProvider router={router} />
		</UserProvider>
	);
}
