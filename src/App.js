import Instructions from "./components/Instructions";
import Screen from "./components/Screen";
// import "./normalize-8.0.1.css"
import "./resetCSS-2.0.css"
import "./App.css"
import Background from "./assets/PC.jpg";

function App() {


	return (
		<div className="app">
            <img className="background" src={Background} alt="" />
            <Screen className="screen"/>
            <Instructions className="instruction"/>
		</div>
	);
}

export default App;
