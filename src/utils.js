export function getPokemonIdFromUrl(url) {
	return url.split("/")[6];
}

export function padPokemonId(url) {
	return getPokemonIdFromUrl(url).toString().padStart(3, 0);
}
