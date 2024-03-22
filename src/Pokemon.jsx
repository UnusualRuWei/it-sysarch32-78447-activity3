import { useState,useEffect } from "react";

function Pokemon({pokemonData,language}) {

    return (
      <>
        { pokemonData ? (pokemonData.map(pokemon => 
        <div className="card" key={pokemon.id}>

          <div className="poke-info">
              <img className="card-image" src={pokemon.image} alt="Profile Pic"></img>
          </div>
          <h2 className="card-title">{pokemon.name[language]}</h2>

          <div className="poke-attri">
              {pokemon.type.map((type) => (
                  <p key={type}>{type}</p>
                ))}
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