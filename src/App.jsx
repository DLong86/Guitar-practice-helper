import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import PracticePage from "./pages/PracticePage";

function App() {
	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal(!showModal);
	};
	return (
		<div className="duration-200">
			<BrowserRouter>
				<Navbar handleModal={handleModal} />
				{showModal && <Modal handleModal={handleModal} />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/practice-page" element={<PracticePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
