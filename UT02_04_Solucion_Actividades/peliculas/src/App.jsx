import Contenedor from "./Contenedor";
import Interprete from "./Interprete";

function App() {
  return (
    
    <Contenedor>
      <h1 className="h1__sqlito">
        Intérpretes
      </h1>
      <div className="flex flex-wrap justify-center">
        <Interprete
          nombre="Marlon Brando"
          foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
        >
          Marlon Brando fue un influyente actor estadounidense...
        </Interprete>

        <Interprete
          nombre="Al Pacino"
          foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg"
        >
          Al Pacino es un actor y director de cine estadounidense...
        </Interprete>
      </div>
    </Contenedor>
  )
}

export default App
