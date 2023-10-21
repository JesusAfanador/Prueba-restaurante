import React  from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi"
import { Container3, Minibox2, Button, H1_2, Notificacion, Box1, H1, Background } from "./styled";
import Carrito from "../orden/principal";
import { Link } from "react-router-dom";
import { Container4, Minibox3, H2, H2_2, Box2, A, A2, A3, Minibox4, Span, Span2 } from "./styled";
import { BsFacebook } from "react-icons/bs"
import { FaInstagramSquare } from "react-icons/fa"
import { useRef } from "react";

const Todo = () => {
  const [activo, setActivo] = useState(false)
  const [notificacion, setNotificacion] = useState(0)
  const [platos, setPlatos] = useState([])
  const navigate = useNavigate()
useEffect(()=>{
  navigate("/menu") 
},[])

useEffect(() => {
  const plato = JSON.parse(localStorage.getItem("platico"));
  if (Array.isArray(plato)) {
    setPlatos(plato);
    setNotificacion(plato.length)
  }
}, []);

  const modalRef = useRef(null);
  const handleOutsideClick = (event) => {
  if (modalRef.current && !modalRef.current.contains(event.target)) {
      setActivo(!activo);
  }
  };

return (

  <Background>
    <Container3>
      <Box1><H1>Platos</H1></Box1>
      <Minibox2>
        <Button style={{fontSize:"60px", cursor:"pointer"}} onClick={()=> setActivo(!activo)}>
          <HiOutlineShoppingCart style={{filter:"drop-shadow(-5px 1px 3px black)"}}></HiOutlineShoppingCart>
          <Notificacion style={{fontSize:"22px", filter:"drop-shadow(-1px 10px 5px black)"}}>{notificacion}</Notificacion>
        </Button>
        <Link to="/informacion" style={{textDecoration:"none"}}>
          <Button><H1_2>Informacion</H1_2></Button>            
        </Link>
        <Link to="/menu" style={{textDecoration:"none"}}>
          <Button><H1_2>Menu</H1_2></Button> 
        </Link>
        {activo  &&  <div ref={modalRef}><Carrito/></div> }
      </Minibox2>
    </Container3>
    <div>
      <Outlet/>
    </div>
    <Container4>
        <Minibox3>
          <Minibox4></Minibox4>
          <Span>Disfruta © 2023</Span>
          <Span>todos los derechos reservados</Span>   
        </Minibox3>
        <Minibox3>
          <H2>Contactanos</H2>
          <H2>Pide tu Domicilio Ya</H2>
          <A target="_blank" rel="noreferrer"><Span2>320 5847516</Span2></A>
        </Minibox3>
        <Minibox3>
          <H2_2>Siguenos</H2_2>
          <Box2>
            <A2 href="https://m.facebook.com/login/?locale=es_ES" target="_blank" rel="noreferrer"><BsFacebook></BsFacebook></A2>
            <A3 href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagramSquare></FaInstagramSquare></A3>
          </Box2>          
        </Minibox3>
      </Container4>
  </Background>
  )
}

export default Todo