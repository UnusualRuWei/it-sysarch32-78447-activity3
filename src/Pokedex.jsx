import { useState, useEffect } from "react"
import Pokemon from "./Pokemon"

function Pokedex() {

  const [languages, setLanguage] = useState("english");
  const [pokemons, setPokemonData] = useState(null); // Stores fetched Pokemon data
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon');
        fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon').then(response => response.json()) .then(data => setPokemonData(data));
        
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        
      }
    };
  
    fetchData(); 
  }, []); 
  
    return (
      <>
        <div className="pokedex-body">

        <button className="eng-lang-btn" onClick={() => setLanguage("english")}>English</button>
        <button className="jp-lang-btn" onClick={() => setLanguage("japanese")}>Japanese</button>
        <button className="cn-lang-btn" onClick={() => setLanguage("chinese")}>Chinese</button>
        <button className="fr-lang-btn" onClick={() => setLanguage("french")}>French</button>

          <div className="pokemon-display">
            <Pokemon pokemonData={pokemons} language={languages}/>
          </div>
          

        </div>
          
      </>
    )
  }
  
  export default Pokedex