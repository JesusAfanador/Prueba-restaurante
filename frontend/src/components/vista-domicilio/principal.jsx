import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import Axios from "axios"
import {Container, Conatiner2, Box, Box2, Container3, Box3, Box4, Infor, Ordenar, Salir, Box5} from "./styled"
import Enviar from "../VentanasModal/envioDomicilio";
import Llena from "../VentanasModal/llenarLosCampos";

export const Domicilio = () => {
    const [enviar, setEnviar] = useState(false)
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [hora, setHora] = useState("")
    const [active, setActive] = useState(false)
    const [plato, setPlatos] = useState([])
    useEffect(() => { 
        const plato = JSON.parse(localStorage.getItem("platico")); 
        if (Array.isArray(plato)) {
        setPlatos(plato);
    }
    }, []);

    const agregarPedido = () => {
        if(nombre.length > 0 && direccion.length > 0 &&  hora.length > 0){
        plato.forEach((platoItem) => { 
            Axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/domicilio`, {
            nombre_plato: platoItem.nombre_plato,
            cantidad: platoItem.cantidad,
            precio: platoItem.precio,
            nombre_cliente: nombre,
            direccion: direccion,
            hora_entrega: hora,
            }).then(() => {
                const platosEnLocalStorage = JSON.parse(localStorage.getItem("platico"));
                const nuevosPlatos = platosEnLocalStorage.filter((item) => item.nombre_plato !== platoItem.nombre_plato);
                localStorage.setItem("platico", JSON.stringify(nuevosPlatos));
                setPlatos(nuevosPlatos);
                setEnviar(!enviar)
            }).catch((error) => {
            alert("Problemas con el plato: " + error.message);
            });
        }); 
        setPlatos([]); 
        }else{
            setActive(!active)
            setTimeout(()=>{
                setActive(false)
            }, 1500)
        }        
    };

    return(
    <>
    {enviar && <Enviar/>}
    {active && <Llena/>}
        <Container>
            <Conatiner2>
                <Box><h2 style={{fontStyle:"italic",fontSize:"25px"}}>Domicilio</h2></Box>
                <Box2><h2 style={{fontStyle:"italic",fontSize:"25px"}}>Agrega tu datos para hacer la entrega</h2></Box2>
                <Container3>
                    <Box3>
                        <span style={{fontStyle:"italic",fontSize:"25px"}}>Nombre y Apellido:</span>
                        <span style={{fontStyle:"italic",fontSize:"25px"}}>Direccion:</span>
                        <span style={{fontStyle:"italic",fontSize:"25px"}}>Hora de entrega:</span>
                    </Box3>
                    <Box4>
                        <Infor 
                            type="text" 
                            name="nombre"
                            autoComplete="off"
                            value={nombre}
                            onChange={ev => setNombre(ev.target.value)}/>
                        <Infor
                            type="text" 
                            name="direccion"
                            autoComplete="off"
                            value={direccion}
                            onChange={ev => setDireccion(ev.target.value)}/>
                        <Infor 
                            type="time" 
                            name="hora"
                            placeholder="Hora de Entrega"
                            autoComplete="off"
                            value={hora}
                            onChange={ev => setHora(ev.target.value)}/>
                    </Box4>
                </Container3>
                <Box5>
                    <Ordenar onClick={()=>agregarPedido()}>Enviar</Ordenar>   
                    <Link to="/menu">
                        <Salir>Volver al Menu</Salir>
                    </Link>                    
                </Box5>            
            </Conatiner2>
        </Container>
    </>
    )
}