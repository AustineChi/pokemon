import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListPokemons from "./index";

beforeEach(cleanup);

describe("<ListPokemons />", () => {
    const pokemons = [
        {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"},
        {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"},
      {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"}
    ];

	test("Renders without crashing", () => {
		render(<ListPokemons pokemons={pokemons} />);
    });
    
    test("should render pokemons name and image", () => {
		const {  getByText, getByAltText } = render(
			<ListPokemons pokemons={pokemons} />
        );
        
		const firstPokemon = getByText(pokemons[0].name);
		const secondPokemon = getByText(pokemons[1].name);
		const thirdPokemon = getByText(pokemons[2].name);
        const firstPokemonImage = getByAltText(pokemons[0].name);
        const secondPokemonImage = getByAltText(pokemons[1].name);
        const thirdPokemonImage = getByAltText(pokemons[2].name)


		expect(firstPokemon).toBeVisible();
		expect(secondPokemon).toBeVisible();
		expect(thirdPokemon).toBeVisible();
        expect(firstPokemonImage).toBeVisible();
        expect(secondPokemonImage).toBeVisible();
        expect(thirdPokemonImage).toBeVisible();
	});


	
});
