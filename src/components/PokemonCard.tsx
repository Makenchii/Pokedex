interface PokemonCardProps {
	pokemon : {
		name: string;
		imgSrc? :string
		
	}

}

function PokemonCard({ PokemonCardProps }) {
	// Récupérer le premier Pokémon de la liste

	return (
		<figure>
			{/* Utiliser l'opérateur ternaire pour vérifier si imgSrc est défini */}
			{pokemon.imgSrc ? (
				<imgSrc={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}

			{/* Utiliser pokemon.name pour le texte */}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
