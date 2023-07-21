// import { useState } from "react";

const Button = ({ text, onClick }) => {
	return (
		<>
			<button
				className="bg-blue-400 w-[70px] sm:w-[100px] py-2 text-center rounded-md hover:bg-blue-600 duration-200"
				onClick={onClick}
			>
				{text}
			</button>
		</>
	);
};

export default Button;
