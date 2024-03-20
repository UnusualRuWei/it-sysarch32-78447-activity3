import { useState, useEffect } from "react"
import Pokemon from "./Pokemon"

function Pokedex() {



    return (
      <>
        <div className="pokedex-body">

          <button className="eng-lang-btn">English</button>
          <button className="jp-lang-btn">Japanese</button>
          <button className="cn-lang-btn">Chinese</button>
          <button className="fr-lang-btn">French</button>

          <div>
            <Pokemon />
          </div>
          

        </div>
          
      </>
    )
  }
  
  export default Pokedex