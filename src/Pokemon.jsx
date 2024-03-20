import { useState,useEffect } from "react";

function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null); // Stores fetched Pokemon data
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon');
          fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon').then(response => response.json()) .then(data => setPokemonData(data));
          
        } catch (error) {
          console.error('Error fetching Pokemon data:', error);
          // Handle errors appropriately (e.g., display an error message to the user)
        }
      };
    
      fetchData(); // Call the function to fetch data on component mount
    }, []); // Empty dependency array ensures fetching happens only once

    return (
      <>
        { pokemonData ? (pokemonData.map(pokemon => 
        <div className="card" key={pokemon.id}>

          <div className="poke-info">
              <img className="card-image" src={pokemon.image} alt="Profile Pic"></img>
          </div>
          <h2 className="card-title" >{pokemon.name.english}</h2>

          <div className="poke-attri">
              <p> {pokemon?.type.join(', ')}</p>
          </div>

          <div className="poke-stat">
              <div className="r-column">
                <p>HP: {pokemon.base.HP}</p>
                <p>Attk: {pokemon.base.Attack}</p>
                <p>Def: {pokemon.base.Defense}</p>
            </div>

            <div className="l-column">
                <p>Speed: {pokemon.base.Speed}</p>
                <p>Sp. Attk: {pokemon.base?.["Sp. Attack"]}</p>
                <p>Sp. Def: {pokemon.base?.["Sp. Defense"]}</p>
            </div>
          </div>

        </div>)) : (
      <p>Loading Pokemon data...</p>
      )}

      </>
    )
  }
  
  export default Pokemon