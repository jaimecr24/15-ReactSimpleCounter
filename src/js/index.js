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

let totalSecs;
let countDown = false;

window.onload = function() {
	totalSecs = 0; // Initial time.
	setInterval(tik, 1000);
};

const tik = () => {
	// tik every second.
	totalSecs = !countDown
		? totalSecs + 1
		: totalSecs > 0
		? totalSecs - 1
		: totalSecs;
	ReactDOM.render(
		<div>
			<SecondsCounter seconds={totalSecs} />
		</div>,
		document.querySelector("#app")
	);
};
