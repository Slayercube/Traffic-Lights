import React from "react";

//include images into your bundle
import {TrafficLight} from "./card.jsx"
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Traffic lights</h1>
			<div className="stick"></div>
			<TrafficLight/>
		</div>
	);
};

export default Home;
