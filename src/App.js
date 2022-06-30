import "./App.css";
import Jugadores from "./Jugadores";
import Drag from "./Drag";


function App() {

  return (
    <div >
      <header className="App-header" >JUGADORES DE CLUB API</header>
        <Jugadores className="App-header" style={{ height: "100px" }}   />
        <header className="App-header">Clubes</header>

        <Drag style={{width: '15%', height: '100px'}} />
        
        {/* <Drag style={{width: '10%', height: '100px'}}/> */}

{/* 
      <Jugadores />
      <Prueba/> */}
    </div>
    
  );
}

export default App;
