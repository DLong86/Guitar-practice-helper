import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ handleModal }) => {
	const [nav, setNav] = useState(true);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="flex items-center justify-between w-screen h-24 px-10 py-4 bg-[#232323]">
			<Link
				to="/"
				className="text-3xl py-2 font-thin uppercase tracking-wider text-[#787878]"
			>
				Guitar Helper
			</Link>
			{nav && (
				<ul className="hidden md:flex gap-6 uppercase text-lg ">
					<li>
						<Link className="hover:text-[#787878] duration-200" to="/">
							Home
						</Link>
					</li>

					<li>
						<Link
							className="hover:text-[#787878] duration-200"
							to="/practice-page"
						>
							My Practice
						</Link>
					</li>
					<li>
						<Link className="hover:text-[#787878] duration-200" to="/about">
							About
						</Link>
					</li>
					<button
						className="hover:text-[#787878] duration-200 uppercase text-lg"
						onClick={handleModal}
					>
						Options
					</button>
				</ul>
			)}
			<div className="cursor-pointer block md:hidden" onClick={handleNav}>
				{!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					!nav
						? "fixed left-0 top-0 w-[60%] h-full bg-[#121212] ease-in-out duration-500 opacity-95"
						: "fixed left-[-100%] top-0 ease-in-out duration-500 h-screen"
				}
			>
				<ul className="text-white p- font-bold uppercase text-3xl mt-20">
					<li className="p-4 cursor-pointer hover:text-purple-400 duration-200">
						<Link to="/" onClick={handleNav}>
							Home
						</Link>
					</li>

					<li className="p-4 cursor-pointer hover:text-purple-400 duration-200">
						<Link to="/practice-page" onClick={handleNav}>
							my practice
						</Link>
					</li>
					<li className="p-4 cursor-pointer hover:text-purple-400 duration-200">
						<Link to="/about" onClick={handleNav}>
							About
						</Link>
					</li>
					<li className="p-4 cursor-pointer hover:text-purple-400 duration-200">
						OPTIONS
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
