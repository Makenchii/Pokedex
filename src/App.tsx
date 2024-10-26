import React, { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
	// Création de l'état pokemonIndex avec useState, initialisé à 0
	const [pokemonIndex, setPokemonIndex] = useState(0);

	// Liste des Pokémons à afficher
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "charmander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			name: "squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
		{
			name: "pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		},
		{
			name: "mew",
		},
	];

	// Fonction pour afficher le Pokémon précédent
	const handlePrevious = () => {
		setPokemonIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : pokemonList.length - 1,
		);
	};

	// Fonction pour afficher le Pokémon suivant
	const handleNext = () => {
		setPokemonIndex((prevIndex) =>
			prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0,
		);
	};

	return (
		<>
			{/* Affichage de la carte du Pokémon */}
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />

			{/* Afficher le bouton "Précédent" uniquement si pokemonIndex > 0 */}
			{pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}

			{/* Afficher le bouton "Suivant" uniquement si pokemonIndex < pokemonList.length - 1 */}
			{pokemonIndex < pokemonList.length - 1 && (
				<button onClick={handleNext}>Suivant</button>
			)}
		</>
	);
}

export default App;
