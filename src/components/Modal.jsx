import { useState } from "react";
import Button from "./Button";
import { practiceOptions } from "../utils/practiceOptions";
import { Link } from "react-router-dom";

const Modal = ({ handleModal }) => {
	const [nextOptions, setNextOptions] = useState(false);

	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);

	const handleNext = () => {
		setNextOptions(!nextOptions);
	};

	const handleHours = (e) => {
		setHours(e.target.value);
	};

	const handleMinutes = (e) => {
		setMinutes(e.target.value);
	};

	console.log(hours, minutes);

	return (
		<div className="fixed inset-0 bg-black flex flex-col text-center justify-center backdrop-blur-sm bg-opacity-25">
			<div className="w-2/3 h-1/2 border-2 border-white mx-auto bg-[#2C2C2C] rounded-2xl flex flex-col items-center justify-evenly">
				{!nextOptions ? (
					<>
						<h1 className="text-2xl capitalize font-bold tracking-wide">
							Add A Time
						</h1>

						<div className="flex flex-row gap-10">
							<div className="flex flex-col items-center">
								<label>Hours</label>
								<input
									className="text-[#2c2c2c] px-2 py-1 w-20 rounded-md"
									type="number"
									defaultValue="0"
									min="0"
									max="24"
									onChange={handleHours}
								/>
							</div>
							<div className="flex flex-col items-center ">
								<label>Minutes</label>
								<input
									className="text-[#2c2c2c] px-2 py-1 w-20 rounded-md"
									type="number"
									defaultValue="0"
									min="0"
									max="60"
									onChange={handleMinutes}
								/>
							</div>
						</div>

						<div className="flex items-center justify-around w-3/4 mx-auto">
							<Button text="Cancel" onClick={handleModal} />
							<Button text="Next" onClick={handleNext} />
						</div>
					</>
				) : (
					<>
						<h1 className="text-2xl capitalize font-bold tracking-wide">
							Practice Options
						</h1>

						<ul className="grid grid-cols-3 items-start text-2xl">
							{practiceOptions.map((option, index) => (
								<li className="flex gap-4 font-thin" key={index}>
									<input
										type="checkbox"
										className="p-4 w-5 accent-pink-400"
										name={option.name}
										value={option.name}
										id={index}
									/>
									<label htmlFor={index}>{option.name}</label>
								</li>
							))}
						</ul>
						<div className="flex items-center justify-around w-3/4 mx-auto">
							<Button text="back" onClick={handleNext} />
							{/* after setting - takes you to your "practice page" */}
							<Link to="/practice-page">
								<Button text="Set" onClick={handleModal} />
							</Link>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Modal;
