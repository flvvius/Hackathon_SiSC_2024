import React from "react";
import "./FilmCard.css";

const FilmCard = ({
	titluFilm,
	genFilm,
	oraIncepereFilm,
	durataFilm,
	descriereFilm,
	idFilm,
}) => {
	return (
		<div className="film-card">
			<div className="film-item ">
				<a href={`/films/booking/${idFilm}`} className="film-item-link">
					<div className="film-item-bg"></div>

					<div className="film-item-title">{titluFilm}&#160;</div>
					<div className="film-item-date film-item-genre-description">
						<strong>{genFilm}</strong> | {descriereFilm}
					</div>
					<div className="film-item-date">
						<div>
							<span className="film-item-date-text">
								Start Time:{" "}
							</span>{" "}
							<strong>{oraIncepereFilm}</strong>
						</div>
						<span className="film-item-date-text">Duration: </span>{" "}
						<strong>{durataFilm} minutes</strong>
					</div>
				</a>
			</div>
		</div>
	);
};
export default FilmCard;
