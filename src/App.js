import "./App.css";
import Jugadores from "./Jugadores";
import Drag from "./Drag";


function App() {

  return (
    <div className="App">

      <header className="App-header" >
      React Torres
      </header>
    <div className="columnas">

      <header className="App-header" >
        <div style={{writingMode: "vertical-lr"}}>
        JUGADORES DE CLUB API
        </div>
        </header>
        <Jugadores className="App-header" style={{ height: "100px" }}   />
        <header className="App-header">
          <p style={{writingMode: "vertical-lr"}}>Clubes de la app</p>
          </header>

        <Drag style={{width: '15%', height: '100px'}} />
    </div>
    </div>
    
  );
}

export default App;
