import React from "react";
import PropTypes from "prop-types";

//create your first component

const Digit = props => {
	return (
		<div className="bg-dark bg-opacity-75 text-white fw-bolder h1 rounded-3 col px-1 py-3 mx-2 my-3">
			{props.chr}
		</div>
	);
};

Digit.propTypes = {
	chr: PropTypes.string
};

const SecondsCounter = props => {
	let str = new Intl.NumberFormat(undefined, {
		minimumIntegerDigits: 6,
		useGrouping: false
	}).format(props.seconds % 1000000);
	return (
		<div className="container text-center bg-black mt-5">
			<div className="row">
				<Digit chr="&#x1F558;" />
				<Digit chr={str[str.length - 6]} />
				<Digit chr={str[str.length - 5]} />
				<Digit chr={str[str.length - 4]} />
				<Digit chr={str[str.length - 3]} />
				<Digit chr={str[str.length - 2]} />
				<Digit chr={str[str.length - 1]} />
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

export default SecondsCounter;
