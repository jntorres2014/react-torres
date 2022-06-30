import React,{useEffect,useState} from 'react';
import "./App.css";

import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
const url = 'http://laraveltorres.herokuapp.com/api/club'
  //const url = 'http://localhost:8000/api/club'
  //const url = 'http://laraveltorres.herokuapp.com/api/club/show/7'
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
    <main>
         { 
      !clubs ? 'CARGANDOOOO..':
    
        clubs.map((club,index) => (
        <div className="d-flex align-items-start bg-light mb-3" key={index}>
              <MDBRow >
                <div className='App'>
                  <MDBCol>
                  <MDBCardImage src="https://i.pinimg.com/originals/d1/6e/65/d16e656b8d40f345d574cf3485ffeb00.jpg" className='img-fluid circular'fluid />
                  <MDBCardBody>
                    <MDBCardTitle>{club.Nombre}</MDBCardTitle>
                    <MDBCardText>{club.Apellido}</MDBCardText>
                    <MDBCardText><small className='text-muted'>{club.Dni}</small></MDBCardText>
                  </MDBCardBody>
                  </MDBCol>
                </div>
              </MDBRow>
            
         </div>       
              ))}
    </main>
  );
}