import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import PracticePage from "./pages/PracticePage";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [checkedItems, setCheckedItems] = useState([]);

	const handleModal = () => {
		setShowModal(!showModal);
	};

	const handleCheckbox = (e, itemName) => {
		const isChecked = e.target.checked;

		if (isChecked) {
			// If the checbox is checked, then add the cheeky little rascals to the state
			setCheckedItems((prevItems) => [...prevItems, itemName]);
		} else {
			// remove them on second click
			setCheckedItems((prevItems) =>
				prevItems.filter((item) => item !== itemName)
			);
		}
	};

	console.log(checkedItems);

	return (
		<div className="duration-200">
			<BrowserRouter>
				<Navbar handleModal={handleModal} />
				{showModal && (
					<Modal
						handleModal={handleModal}
						checkedItems={checkedItems}
						handleCheckbox={handleCheckbox}
					/>
				)}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/practice-page"
						element={
							<PracticePage
								checkedItems={checkedItems}
								handleCheckbox={handleCheckbox}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
