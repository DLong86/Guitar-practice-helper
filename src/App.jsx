import { useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal(!showModal);
	};
	return (
		<div className="duration-200">
			<div className="flex items-center justify-around w-screen py-4">
				<h1 className="text-2xl font-bold">Guitar Practice Helper</h1>
				{/* Could set a time and things to do within that time */}
				<button
					className="rounded-md bg-gray-500 px-4 py-1 hover:bg-gray-600 duration-200"
					onClick={handleModal}
				>
					Options
				</button>
			</div>
			{showModal && <Modal handleModal={handleModal} />}
		</div>
	);
}

export default App;
