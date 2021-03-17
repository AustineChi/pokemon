import { useState, useEffect } from "react";
import axios from "axios";
import { ListPokemons, Pagination } from "../../components";
import { Container, Title } from "../../App.styles";

const Pokemons = () => {
	const [loading, setLoading] = useState(true);
	const [pokemons, setPokemons] = useState([]);
	const [previousPageUrl, setPreviousPageUrl] = useState("");
	const [nextPageUrl, setNextPageUrl] = useState("");
	const [currentPageUrl, setCurrentPageUrl] = useState(
		"https://pokeapi.co/api/v2/pokemon"
	);

	useEffect(() => {
		setLoading(true);
		let cancel;
		const getPokemons = async () => {
			const fetchPokemons = await axios.get(currentPageUrl, {
				cancelToken: new axios.CancelToken((call) => (cancel = call)),
			});
			setLoading(false);
			fetchPokemons?.data?.results &&
				setPokemons(fetchPokemons.data.results);
			setNextPageUrl(fetchPokemons.data.next);
			setPreviousPageUrl(fetchPokemons.data.previous);
		};
		getPokemons();
		return () => cancel();
	}, [currentPageUrl]);

	const handleNextPage = () => {
		setCurrentPageUrl(nextPageUrl);
	};

	const handlePreviousPage = () => {
		setCurrentPageUrl(previousPageUrl);
	};

	return loading ? (
		<div> loading... </div>
	) : (
		<Container>
			<div>
				<Title>Pokemon</Title>
				<ListPokemons pokemons={pokemons} />
				<Pagination
					handleNextPage={nextPageUrl ? handleNextPage : null}
					handlePreviousPage={
						previousPageUrl ? handlePreviousPage : null
					}
				/>
			</div>
		</Container>
	);
};

export default Pokemons;
