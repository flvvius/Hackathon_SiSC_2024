import React, { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";
import axios from "axios";

const BookingPage = () => {
	const [filme, setFilme] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(
					"http://localhost:8080/api/sala/getAll",
					{
						withCredentials: true,
					}
				);
				setFilme(result.data);
				console.log(filme);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const getStartingTime = (film) => {
		return new Date(film.ora_incepere_film).toLocaleDateString("ro-RO", {
			hour: "2-digit",
			minute: "2-digit",
		});
	};
	return (
		<div className="booking-page">
			<h1 className="booking-header">Book your film ticket now!</h1>
			{filme.map((film) => (
				<FilmCard
					key={film.titlu_film}
					titluFilm={film.titlu_film}
					genFilm={film.gen_film}
					oraIncepereFilm={getStartingTime(film)}
					durataFilm={film.durata_film}
					descriereFilm={film.descriere_film}
					idFilm={film.id}
				/>
			))}
		</div>
	);
};

export default BookingPage;
