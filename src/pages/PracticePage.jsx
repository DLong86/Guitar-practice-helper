import React from "react";

const PracticePage = () => {
	return (
		<div className="flex flex-col gap-10 w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20 mb-20">
			<h1 className="text-6xl font-thin text-[#787878] mb-2 underline tracking-wide">
				Practice Page
			</h1>
			<p className="text-2xl">This is the practice page</p>
			<p className="text-2xl">All options selected from modal will go here</p>
			<p className="text-2xl">
				Maybe they will be cards that once clicked will show each practice task
				ie: scales card - will show types of scales to do etc...
			</p>
		</div>
	);
};

export default PracticePage;
