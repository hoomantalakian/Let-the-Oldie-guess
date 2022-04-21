import Instructions from "./components/Instructions";
import Screen from "./components/Screen";
import "./resetCSS-2.0.css";
import "./App.css";
import Background from "./assets/PC.jpg";

function App() {
	return (
		<div>
			<div className="app">
				<img className="background" src={Background} alt="" />
				<Screen className="screen" />
				<Instructions className="instruction" />
			</div>
			<h2 className="alert">Please Rotate Your Device!</h2>
		</div>
	);
}

export default App;
