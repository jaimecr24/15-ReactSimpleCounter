import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//create your first component

const Digit = props => {
	return (
		<div
			className="rounded-3 col pb-3 mx-1 my-3"
			style={{ background: "#232323" }}>
			{props.chr}
		</div>
	);
};

Digit.propTypes = {
	chr: PropTypes.string
};

const SecondsCounter = props => {
	const [count, setCount] = useState(0);

	// Format number to string.
	let str = new Intl.NumberFormat(undefined, {
		minimumIntegerDigits: 6,
		useGrouping: false
	}).format(props.seconds % 1000000);

	// show each character of string.
	let myStyle = {
		fontSize: "120px",
		lineHeight: "120px",
		background: "#101010",
		color: "white",
		padding: "10px"
	};

	let btnStyle = {
		fontSize: "30px"
	};

	return (
		<div className="container text-center mt-5">
			<div className="row" style={myStyle}>
				<Digit chr="&#x1F558;" />
				<Digit chr={str[str.length - 6]} />
				<Digit chr={str[str.length - 5]} />
				<Digit chr={str[str.length - 4]} />
				<Digit chr={str[str.length - 3]} />
				<Digit chr={str[str.length - 2]} />
				<Digit chr={str[str.length - 1]} />
			</div>
			<div className="row mt-5">
				<button className="col mx-1" style={btnStyle}>
					COUNTDOWN
				</button>
				<button className="col mx-1" style={btnStyle}>
					STOP
				</button>
				<button className="col mx-1" style={btnStyle}>
					RESET
				</button>
				<button className="col mx-1" style={btnStyle}>
					RESUME
				</button>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

export default SecondsCounter;
