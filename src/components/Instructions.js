import "./Instruction.css";

function Instructions() {
	return (
		<div className="instruction">
			{/* <hr /> */}
			<h1>Let the "Oldie" Guess the number!</h1>
			<ul>
				<li>Think of a number (1 to 100)</li>
				<li>Let the "Oldie" guess !</li>
				<li>
					If your chosen number was less, press "down arrow" and vice
					versa.
				</li>
				<li>I know it's ridiculous! but let the "Oldie" be happy :)</li>
			</ul>
		</div>
	);
}

export default Instructions;
