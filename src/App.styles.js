import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1000px;
  width: 90%;
  height: 100%;
  padding: 0;
  margin: 50px auto;
  box-sizing: border-box;

}
`;

export const FlexContainer = styled.div`
  display: flex
}
`;

export const Title = styled.h2`
	color: #ff0;
	background-color: #f0f;
	padding: 10px;
	width: 200px;
	text-align: center;
	margin: 50px auto;
	font-weight: 700;
	font-size: 28px;
`;

export const BackButton = styled(Link)`
		text-decoration: none;
        background-color: #2f3337;
        border: 0;
        width: 100px;
        margin: 5px 0;
        color: white;
        border-radius: 0.25rem;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 15px;
        padding: 10px;
        outline: none;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3)
        }
        &:active {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            transform: translateY(4px);
        }
}
`;

export const PokemonImage = styled.img.attrs(({ pokemonId }) => ({
	src: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`,
}))`
    width: 200PX;
	height: 200px;
	margin: 50px
}
`;
