import React, { useEffect, useState } from "react";
import Axios from "axios"
import { useNavigate,Link } from "react-router-dom";
import { Domicilio, Fondo, Pedido, Pendiente, H2, Select, Titulo, Regresar, Box, Notificacion } from "./styled";

const SelectFactura = () => {
    const Hola = process.env.REACT_APP_PRIMERO_UNO
    const navigate = useNavigate()
    const [factura, setFactura] = useState([])
    const [notificacion, setNotificacion] = useState(0)
    const Domicilios = () => {
    Axios.get(`${Hola}/api/domicilios`).then((response) => {
        setFactura(response.data)
        setNotificacion(response.data.length)
    })
    .catch(error => {
    })
    }
    useEffect(()=>{
    Domicilios()
    },[])
    const enviar = (direccion) => {
    const parametro = direccion;
    const parametroCodificado = encodeURIComponent(parametro); 
    navigate(`/private/todofisica/facturadomicilio/${parametroCodificado}`)
    }

return (
<>
    <Fondo>
        <Select>
            <Titulo>
                <Link to="/private/todofisica/fisica">
                    <Regresar>regresar al menu</Regresar>
                </Link>
                    <Box style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Domicilio>Domicilios Pendientes</Domicilio>
                        <Notificacion style={{fontSize:"22px", filter:"drop-shadow(-1px 10px 5px black)"}}>{notificacion}</Notificacion>
                    </Box>
            </Titulo>
            <Pedido>
            {factura.length > 0 ? (
                factura.map((domi, index) => {
                return (
                <Pendiente onClick={()=> enviar(domi.direccion)} key={index}>
                    <H2>Nombre: {domi.nombre_cliente}.</H2>
                    <H2>Hora Entrega: {domi.hora_entrega}.</H2>
                    <H2>Direccion: {domi.direccion}.</H2>
                </Pendiente>
                )})               
            ): <Pendiente>
                <H2>No tenemos Domicilios Pendientes</H2>
            </Pendiente>}
            </Pedido>
        </Select>
    </Fondo>
</>
)
}

export default SelectFactura