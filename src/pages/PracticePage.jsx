import React from "react";

const PracticePage = ({ checkedItems }) => {
	// Need to map over the checkedItems and show them in the div instead of all those below
	return (
		<div className="flex flex-col gap-10 w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20 mb-20">
			<h1 className="text-6xl font-thin text-[#787878] mb-2 underline tracking-wide">
				My Practice Page
			</h1>
			<div className="w-full h-screen sm:h-[600px] grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-8 ">
				<div className=" bg-[#1E1E1E] rounded-lg p-6">
					<p className="text-2xl">This is the practice page</p>
				</div>
				<div className="bg-[#1E1E1E] rounded-lg p-6">
					<p className="text-2xl">
						All options selected from modal will go here
					</p>
				</div>
				<div className="bg-[#1E1E1E] rounded-lg p-6">
					<p className="text-2xl">
						Maybe they will be cards that once clicked will show each practice
						task ie: scales card - will show types of scales to do etc...
					</p>
				</div>
				<div className="bg-[#1E1E1E] rounded-lg p-6">
					<p className="text-2xl">
						Maybe they will be cards that once clicked will show each practice
						task ie: scales card - will show types of scales to do etc...
					</p>
				</div>
				<div className=" bg-[#1E1E1E] rounded-lg p-6">
					<p className="text-2xl">
						Maybe they will be cards that once clicked will show each practice
						task ie: scales card - will show types of scales to do etc...
					</p>
				</div>
			</div>
		</div>
	);
};

export default PracticePage;
