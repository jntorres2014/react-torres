
import React,{useEffect,useState} from 'react';
import "./App.css";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  //const url = 'http://laraveltorres.herokuapp.com/api/club'
  //const url = 'http://localhost:8000/api/club'
  const url = 'http://laraveltorres.herokuapp.com/api/club/show/7'
  const [clubs, setClubs] = useState()
  const inicializarClubs = async () => { 
    const response = await fetch(url)
    const responseJSON = await response.json()
    setClubs(responseJSON)
    console.log(responseJSON)
} 
useEffect (() =>{
  inicializarClubs()

},[])
  return (
 
    <MDBCard>
      <div className='App-header' style={{background:"blue"}}>
        {clubs && clubs.Club.Nombre
        // <img src={"http://laraveltorres.herokuapp.com/storage/"+ clubs.Club.Escudo} alt="No foto"/>
        }
      </div>
      <MDBRow style={{background:"white"}}>
      { 
      !clubs ? 'CARGANDOOOO..':
        clubs.Jugadores.map((jugador,index) => (
          <div key={index}>
          
        <div>
          
        <MDBCol >
            {/* https://i.pinimg.com/originals/d1/6e/65/d16e656b8d40f345d574cf3485ffeb00.jpg */}

          <MDBCardImage src={jugador.Foto} className='img-fluid circular'fluid />
            <img src="https://www.teleadhesivo.com/es/img/as1af002-jpg/folder/products-listado-merchant/vinilos-decorativos-jugador-futbol.jpg" className='circular' />
        
          <MDBCardBody>
            <MDBCardTitle>{jugador.Nombre}</MDBCardTitle>
            <MDBCardText>
                {jugador.Apellido}
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>{jugador.Dni}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
         </div>       

          </div>
              ))}
      </MDBRow>
    </MDBCard>
  );
}