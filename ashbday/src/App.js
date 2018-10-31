import React, { Component } from "react";
import ReactHowler from "react-howler";

import Poke from "./music/pokemontheme.mp3";
import ashy from "./images/ashy.png";
import snorlax from "./images/snorenlax.png";
import lizix from "./images/lizix.png";
import Pokeball from "./components/pokeball";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="main">
					<h1 className="birthday">Happy Birthday Ash!</h1>
					<div className="ghosts">
						<i className="fas fa-ghost fa-spin ghost-1" />
						<i className="fas fa-ghost fa-spin ghost-2" />
						<i className="fas fa-ghost fa-spin ghost-3" />
						<i className="fas fa-ghost fa-spin ghost-4" />
						<i className="fas fa-ghost fa-spin ghost-5" />
					</div>
					<img className="ashrevor" src={ashy} />
					<Pokeball />

					<div className="pokebabes">
						<img src={snorlax} className="lauren" />
						<img src={lizix} className=" liz" />

						<ReactHowler src={Poke} playing={true} loop={true} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
