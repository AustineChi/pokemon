import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailsTable from "./index";


describe("<DetailsTable />", () => {

    const pokemonQualities = {
        Pokemon_id: "11",
        name: "caterpilla",
        hatch_counter: 20,
        is_baby: true,
        is_mythical: true
    }
    beforeEach(cleanup);

	test("should render name, desc, chilly and image", () => {
		const { getAllByText } = render(
			<DetailsTable pokemonQualities={pokemonQualities} />
		);

		const id = getAllByText(pokemonQualities.Pokemon_id)[0];
		const name = getAllByText(pokemonQualities.name)[0];
		const hatchCounter = getAllByText(pokemonQualities.hatch_counter)[0];
        const isMythical = getAllByText(String(pokemonQualities.is_mythical))[0];
        const isBaby = getAllByText(String(pokemonQualities.is_baby))[0]


		expect(name).toBeVisible();
		expect(id).toBeVisible();
		expect(hatchCounter).toBeVisible();
        expect(isMythical).toBeVisible();
        expect(isBaby).toBeVisible();

	});

});
