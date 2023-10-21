import React  from "react"
import {Outlet, useNavigate} from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import { HiOutlineShoppingCart, } from "react-icons/hi"
import { Container, Minibox2, Button, Notificacion, Box1, H1, H1_2, Background } from "./styled";
import { Link } from "react-router-dom"
import CarritoFisica from "../orden-fisica/principal";
import { LOGOUT } from "../router/path";

const TodoFisica = () => {
    const [activo, setActivo] = useState(false)
    const [notificacion, setNotificacion] = useState(0)
    const [platos, setPlatos] = useState([])
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
        <Container>
            <Box1><H1>Platos</H1></Box1>
            <Minibox2>
                <Button style={{fontSize:"60px", cursor:"pointer"}} onClick={()=> setActivo(!activo)}>
                    <HiOutlineShoppingCart style={{filter:"drop-shadow(-5px 1px 3px black)"}}></HiOutlineShoppingCart>
                    <Notificacion>{notificacion}</Notificacion>
                </Button>
                {activo  && <div ref={modalRef}><CarritoFisica /></div> }
                <Link to="/private/todofisica/selectfactura" style={{textDecoration:"none"}}>
                    <Button><H1_2>Domicilio</H1_2></Button> 
                </Link>
                <Link to="/private/todofisica/mesa" style={{textDecoration:"none"}}>
                    <Button><H1_2>Mesa</H1_2></Button> 
                </Link>
                <Link to={LOGOUT} style={{textDecoration:"none"}}>
                    <Button><H1_2>Cerrar sesion</H1_2></Button> 
                </Link>
            </Minibox2>
        </Container>
        <div >
            <Outlet/>
        </div>
    </Background>
    )
}

export default TodoFisica