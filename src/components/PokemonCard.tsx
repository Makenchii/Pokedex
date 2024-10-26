interface PokemonCardProps {
	pokemon: {
		name: string;
		imgSrc?: string; // imgSrc est facultatif
	};
}

function PokemonCard({ pokemon }: PokemonCardProps) {
	return (
		<figure>
			{/* Utilisation du ternaire pour vérifier si imgSrc est défini */}
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}

			{/* Affichage du nom du Pokémon */}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
