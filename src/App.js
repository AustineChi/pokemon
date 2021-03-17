import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pokemons from "./views/pokemons";
import PokemonDetails from "./views/pokemon-details";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Pokemons} />
				<Route
					path="/pokemon-detials/:id"
					exact
					component={PokemonDetails}
				/>
			</Switch>
		</Router>
	);
};

export default App;
