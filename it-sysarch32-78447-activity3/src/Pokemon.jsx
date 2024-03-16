

function Pokemon() {


    return (
      <>
        <div className="card">
            <img className="card-image" src="" alt="Profile Pic"></img>
            <h2 className="card-title" key="">SAmple</h2>

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
      </>
    )
  }
  
  export default Pokemon