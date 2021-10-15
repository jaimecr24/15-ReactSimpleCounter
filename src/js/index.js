//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondscounter.jsx";

var totalSecs;

window.onload = function() {
	totalSecs = 0; // Initial time.
	setInterval(click, 1000);
};

const click = () => {
	totalSecs++;
	ReactDOM.render(
		<div>
			<Home />
			<SecondsCounter seconds={totalSecs} />
		</div>,
		document.querySelector("#app")
	);
};
