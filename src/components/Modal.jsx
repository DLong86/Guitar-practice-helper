import React from "react";
import Button from "./Button";

const Modal = ({ handleModal }) => {
	return (
		<div className="fixed inset-0 bg-black flex flex-col text-center justify-center backdrop-blur-sm bg-opacity-25">
			<div className="w-1/2 h-2/3 border-2 border-white mx-auto bg-gray-800 rounded-2xl flex flex-col items-center justify-evenly">
				<h1 className="">Options</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
					temporibus dolores! Facere.
				</p>
				<div className="flex items-center justify-around w-3/4 mx-auto">
					<Button text="Cancel" onClick={handleModal} />
					<Button text="Next" />
				</div>
			</div>
		</div>
	);
};

export default Modal;
