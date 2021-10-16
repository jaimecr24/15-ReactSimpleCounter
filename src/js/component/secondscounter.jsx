import React, { useEffect, useRef, useState } from "react";
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

const SecondsCounter = () => {
	// init count and call setInterval every second.
	const [count, setCount] = useState(0); // counter of seconds.
	const [countUp, setCountUp] = useState(true); // true if we are count up.
	const [countStop, setCountStop] = useState(false); // true if counter is stoped.
	let intervalRef = useRef();

	const increaseCount = () => setCount(prev => prev + 1);
	const decreaseCount = () => setCount(prev => (prev > 0 ? prev - 1 : prev));

	useEffect(() => {
		intervalRef.current = setInterval(increaseCount, 1000);
		return () => clearInterval(intervalRef.current);
	}, []);

	// When user press button CountDown
	const handleCountDownClick = () => {
		if (!countStop) {
			// contador en marcha
			clearInterval(intervalRef.current); // eliminamos el actual.
		}
		intervalRef.current = setInterval(
			countUp ? decreaseCount : increaseCount,
			1000
		);
		setCountStop(() => false);
		setCountUp(prev => !prev); // invert the direction of counter.
	};

	// When user press button STOP.
	const handleStopCounter = () => {
		if (!countStop) {
			clearInterval(intervalRef.current);
			setCountStop(() => true);
		}
	};

	// When user press button RESUME.
	const handleResume = () => {
		if (countStop) {
			intervalRef.current = setInterval(
				countUp ? increaseCount : decreaseCount,
				1000
			);
			setCountStop(() => false);
		}
	};

	// When user press button RESET.
	const handleReset = () => {
		if (!countUp && !countStop) {
			// if counter is descending...
			clearInterval(intervalRef.current);
			intervalRef.current = setInterval(increaseCount, 1000);
		}
		setCount(() => 0);
		setCountUp(() => true);
		setCountStop(() => false);
	};

	// Format number to string.
	let str = new Intl.NumberFormat(undefined, {
		minimumIntegerDigits: 6,
		useGrouping: false
	}).format(count % 1000000);

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
				<button
					className="col mx-1"
					style={btnStyle}
					onClick={handleCountDownClick}>
					COUNT DOWN / UP
				</button>
				<button
					className="col mx-1"
					style={btnStyle}
					onClick={handleStopCounter}>
					STOP
				</button>
				<button
					className="col mx-1"
					style={btnStyle}
					onClick={handleResume}>
					RESUME
				</button>
				<button
					className="col mx-1"
					style={btnStyle}
					onClick={handleReset}>
					RESET
				</button>
			</div>
		</div>
	);
};

export default SecondsCounter;
