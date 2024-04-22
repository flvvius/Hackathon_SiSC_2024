import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SeatsLayout.css";
import axios from "axios";

export default function SeatsLayout() {
	const rows = 5;
	const columns = 10;
	const [initialSeats, setInitialSeats] = useState([]);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const navigate = useNavigate();

	const { idFilm } = useParams();

	useEffect(() => {
		// console.log(idFilm)
		const getData = async () => {
			try {
				axios.get(
					`http://localhost:8080/api/loc/get/${idFilm}`,
					{
						withCredentials: true,
					}
				).then((res)=>{
					const seats = res.data;
					setInitialSeats(seats);
				}).catch((err)=>{
					console.log(err);
				}).finally(()=>{
				})
				// console.log(seats)
				//console.log(initialSeats);
			} catch (error) {
				console.log(error);
			}
			// console.log(initialSeats);
		};

		getData();

		const timer = setTimeout(() => {

		}, 1000);

		return () => clearTimeout(timer);

	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			const seats = initialSeats.map(seat => seat.numar_rand*10 + seat.numar_loc);
			// console.log(seats)
			setSelectedSeats(seats);
		}, 1000); // 1000 milliseconds = 1 second
	  
		  return () => clearTimeout(timer); // Cleanup the timer
	}, [])

	useEffect(() => {

        // console.log("Changed Widgets: ", selectedSeats)
		

    }, [selectedSeats])

	

	const handleSeatClick = (rowIndex, colIndex) => {
		const seatId = `${rowIndex + 1}${colIndex + 1}`;
		if (selectedSeats.includes(seatId)) {
			setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
		} else {
			setSelectedSeats([...selectedSeats, seatId]);
		}
	};

	const handleSelectPlaces = () => {
		// console.log(selectedSeats);

		// const randuri = selectedSeats.map(seat => seat.toString()[0]);
		// const locuri = selectedSeats.map(seat => seat.toString().length > 2 ? seat.toString()[1] + seat.toString()[2] : seat.toString()[1]);

		// const seat = {
		// 	id_sala: idFilm,
		// 	numar_rand: randuri[0],
		// 	numar_loc: locuri[0],
		// 	status_loc: false
		// }

		selectedSeats.map(async seat => {

			const rand = seat.toString()[0];
			const loc = seat.toString().length > 2 ? seat.toString()[1] + seat.toString()[2] : seat.toString()[1];

			const bdSeat = {
				id_sala: idFilm,
				numar_rand: rand,
				numar_loc: loc,
				status_loc: false
			}

			console.log(bdSeat)

			await axios.post("http://localhost:8080/api/loc/add", bdSeat, {
				withCredentials: true
			});

		})

		navigate("/films");
	};

	return (
		
		<div className="random-container">
			{/* {console.log(selectedSeats)} */}
			<div className="screen"></div>
			<div className="seats-container">
				{Array.from({ length: rows }, (_, rowIndex) => (
					<React.Fragment key={`row-${rowIndex}`}>
						<div className="seat-number-left">{rowIndex + 1}</div>
						{
						Array.from({ length: columns }, (_, colIndex) => {
							const seatId = `${rowIndex + 1}${colIndex + 1}`;
							const displaySeat = `${rowIndex + 1}-${
								colIndex + 1
							}`;
							return (
								<button
									key={`seat-${rowIndex}-${colIndex}`}
									className={`seat ${
										selectedSeats.includes(seatId)
											? "selected"
											: ""
									}`}
									onClick={() =>
										handleSeatClick(rowIndex, colIndex)
									}
								>
									{displaySeat}
								</button>
							);
						})}
						<div className="seat-number-right">{rowIndex + 1}</div>
					</React.Fragment>
				))}
			</div>
			<button
				className="rezerva-button select-btn"
				onClick={handleSelectPlaces}
			>
				Select places
			</button>
		</div>
	);
}
