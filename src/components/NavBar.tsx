import React from "react";

// Interface pour représenter un Pokémon
interface Pokemon {
	name: string;
	imgSrc?: string;
}

// Interface pour typer les props du composant NavBar
interface NavBarProps {
	pokemonIndex: number; // Index actuel du Pokémon dans la liste
	setPokemonIndex: (index: number) => void; // Fonction pour mettre à jour l'index
	pokemonList: Pokemon[]; // Liste des Pokémons
}

// Composant NavBar sans utiliser React.FC
function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	// Fonction pour passer au Pokémon précédent
	const handlePrevious = () => {
		setPokemonIndex(
			pokemonIndex > 0 ? pokemonIndex - 1 : pokemonList.length - 1,
		);
	};

	// Fonction pour passer au Pokémon suivant
	const handleNext = () => {
		setPokemonIndex(
			pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : 0,
		);
	};

	return (
		<nav>
			{/* Afficher le bouton "Précédent" uniquement si pokemonIndex > 0 */}
			{pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}

			{/* Afficher le bouton "Suivant" uniquement si pokemonIndex < pokemonList.length - 1 */}
			{pokemonIndex < pokemonList.length - 1 && (
				<button onClick={handleNext}>Suivant</button>
			)}
		</nav>
	);
}

export default NavBar;
