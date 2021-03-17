import { array } from "prop-types";
import { useHistory } from "react-router-dom";

import {
	Container,
	PokemonItem,
	PokemonImage,
	PokemonName,
} from "./ListPokemons.styles";
import { getPokemonIdFromUrl, padPokemonId } from "../../utils";

const ListPokemons = ({ pokemons }) => {
	let history = useHistory();

	return (
		<Container>
			{pokemons.map((pokemon, key) => {
				return (
					<PokemonItem
						key={key}
						onClick={() =>
							history.push(
								`/pokemon-detials/${getPokemonIdFromUrl(
									pokemon.url
								)}`
							)
						}
					>
						<PokemonImage
							pokemonId={padPokemonId(pokemon.url)}
							alt={pokemon.name}
						/>
						<PokemonName>{pokemon.name}</PokemonName>
					</PokemonItem>
				);
			})}
		</Container>
	);
};

ListPokemons.propTypes = {
	pokemons: array,
};

export default ListPokemons;
