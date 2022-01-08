import React, { Fragment, useState, useReducer } from "react";
import upArrow from "../assets/up-pixel.svg";
import downArrow from "../assets/down-pixel.svg";
import "./Screen.css";

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

function reducer(state, action) {
	if (action.type === "MIN_HOLDER") {
		return {
			minNum: state.computerGuess,
			maxNum: state.maxNum,
			computerGuess: getRandomInt(state.computerGuess + 1, state.maxNum),
		};
	}
	if (action.type === "MAX_HOLDER") {
		return {
			minNum: state.minNum,
			maxNum: state.computerGuess,
			computerGuess: getRandomInt(state.minNum, state.computerGuess - 1),
		};
	}
	if (action.type === "RESET") {
		return {
			minNum: 1,
			maxNum: 100,
			computerGuess: getRandomInt(1, 100),
		};
	}

	return {};
}

function Screen() {
	const [isPlaying, setisPlaying] = useState(false);
	const [isEnded, setisEnded] = useState(false);

	const [stateNum, dispatchNum] = useReducer(reducer, {
		minNum: 1,
		maxNum: 100,
		computerGuess: getRandomInt(1, 100),
	});

	function isPlayingToggle() {
		setisPlaying((prevState) => !prevState);
	}
	function isEndedToggle() {
		setisEnded((prevState) => !prevState);
	}

	function minHandler() {
		console.log("minHandler submit...");
		dispatchNum({ type: "MIN_HOLDER" });
	}

	function maxHandler() {
		console.log("MaxHandler submit...");
		dispatchNum({ type: "MAX_HOLDER" });
	}

	function resetHandler() {
		dispatchNum({ type: "RESET" });
	}

	/////
	console.log(
		`{min: ${stateNum.minNum}, max: ${stateNum.maxNum}, Guess: ${stateNum.computerGuess}}`
	); /////
	return (
		<div className="screen">
			{/* intro */}
			{!isPlaying && !isEnded && (
				<Fragment>
					<h1>
						Hey!
						<br />
						Are you ready?
					</h1>
					<button className="button" onClick={isPlayingToggle}>
						Yes! Let's go
					</button>
				</Fragment>
			)}

			{/* game starting */}
			{isPlaying && !isEnded && (
				<Fragment>
					<h1>{`Is that: ${stateNum.computerGuess} ?`}</h1>
					<img
						onClick={minHandler}
						src={upArrow}
						alt=""
						className="arrow pointer"
					/>
					<img
						onClick={maxHandler}
						src={downArrow}
						alt=""
						className="arrow pointer"
					/>
					<button
						className="button ok"
						onClick={() => {
							isPlayingToggle();
							isEndedToggle();
						}}
					>
						That's it!
					</button>
				</Fragment>
			)}

			{/* end message */}
			{!isPlaying && isEnded && (
				<Fragment>
					<h1>
						Hooray...
						<br />
						Play again? :)
					</h1>
					<button
						className="button"
						onClick={() => {
							resetHandler();
							isPlayingToggle();
							isEndedToggle();
						}}
					>
						Why not...
					</button>
				</Fragment>
			)}
		</div>
	);
}

export default Screen;
