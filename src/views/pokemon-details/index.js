import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { ListPokemons, DetailsTable } from "../../components";

import {
	Container,
	Title,
	BackButton,
	FlexContainer,
	PokemonImage,
} from "../../App.styles";

const PokemonsDetials = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [pokemonSpecies, setPokemonSpecies] = useState([]);
	const [pokemonQualities, setPokemonQualities] = useState({});
	const paddPokemonId = (id) => id.toString().padStart(3, 0);

	function computePokemonEvolutions(data, pokemonName) {
		let pokemonEvolotions = [];
		let pokemon = data;
		let evolvesTo = false;

		do {
			if (pokemonName === pokemon?.species?.name) {
				evolvesTo = true;
			}

			evolvesTo &&
				pokemonName !== pokemon?.species?.name &&
				pokemonEvolotions.push({
					name: pokemon.species.name,
					url: pokemon.species.url,
				});

			pokemon = pokemon["evolves_to"][0];
		} while (!!pokemon && pokemon.hasOwnProperty("evolves_to"));

		return pokemonEvolotions;
	}

	useEffect(() => {
		setLoading(true);
		const getPokemons = async () => {
			const fetchPokemonSpecies = await axios.get(
				`https://pokeapi.co/api/v2/pokemon-species/${id}`
			);

			const fetchPokemonEvolutionChain = await axios.get(
				fetchPokemonSpecies.data.evolution_chain.url
			);
			setLoading(false);
			setPokemonQualities({
				Pokemon_id: fetchPokemonSpecies.data.id,
				name: fetchPokemonSpecies.data.name,
				hatch_counter: fetchPokemonSpecies.data.hatch_counter,
				is_baby: fetchPokemonSpecies.data.is_baby,
				is_mythical: fetchPokemonSpecies.data.is_mythical,
			});
			setPokemonSpecies(
				computePokemonEvolutions(
					fetchPokemonEvolutionChain.data.chain,
					fetchPokemonSpecies.data.name
				)
			);
		};
		getPokemons();
	}, [id]);

	return loading ? (
		<div> loading... </div>
	) : (
		<Container>
			<div>
				<Title>Pokemon</Title>
				<BackButton to="/">Go Home</BackButton>
				<FlexContainer>
					<PokemonImage pokemonId={paddPokemonId(id)} />
					<DetailsTable pokemonQualities={pokemonQualities} />
				</FlexContainer>
				<h3> {pokemonQualities.name} evolves to:</h3>
				<ListPokemons pokemons={pokemonSpecies} />
			</div>
		</Container>
	);
};

export default PokemonsDetials;
