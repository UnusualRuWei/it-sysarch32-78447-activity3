

function Pokemon() {


  function PokemonCard() {
    const [pokemonData, setPokemonData] = useState(null); // Stores fetched Pokemon data
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon');
          if (!response.ok) {
            throw new Error(`Error fetching Pokemon data: ${response.statusText}`);
          }
          const data = await response.json();
          setPokemonData(data);
        } catch (error) {
          console.error('Error fetching Pokemon data:', error);
          // Handle errors appropriately (e.g., display an error message to the user)
        }
      };
    
      fetchData(); // Call the function to fetch data on component mount
    }, []); // Empty dependency array ensures fetching happens only once
     
  }

  

    return (
      <>
        <div className="card">

          <div className="poke-info">
              <img className="card-image" src="" alt="Profile Pic"></img>
              <h2 className="card-title" key="">SAmple</h2>
          </div>

          <div className="poke-attri">
              <p>Grass</p>
              <p>Poison</p>
          </div>

          <div className="poke-stat">
              <div className="r-column">
                <p>HP: {}</p>
                <p>Attk: {}</p>
                <p>Def: {}</p>
            </div>

            <div className="l-column">
                <p>Speed: {}</p>
                <p>Sp. Attk: {}</p>
                <p>Sp. Def: {}</p>
            </div>
          </div>

        </div>

      </>
    )
  }
  
  export default Pokemon