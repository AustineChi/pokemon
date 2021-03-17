import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: grid;
	box-sizing: border-box;
	grid-template-columns: repeat(auto-fill, 201px);
	justify-content: space-between;
`;

export const PokemonItem = styled.div`
    padding: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    margin: 15px 0;
    box-sizing: border-box;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.45);
    transition:box-shadow 0.4s ease;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.65);
    }
}
`;

export const PokemonImage = styled.img.attrs(({ pokemonId }) => ({
	src: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`,
}))`
    width: 100%;
    height: 200px;
}
`;

export const PokemonName = styled.div`
    padding: 10px;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    box-sizing: border-box;
}

`;

export const NavLink = styled(Link)`
	color: #333;
	text-decoration: none;
`;
