import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from "axios"
import { Container, Box1, Box2, Box3, Container2, Minibox1, H1, H4, H4_2,Img } from "./styled"

export const PrincipalConnect = () => {
const [sancocho, setSancocho] = useState([])
const [corriente, setCorriente] = useState([])
const [bebida, setBebida] = useState([])

const platosSancocho = () => {
    Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/platosSancocho`).then((response)=>{
        setSancocho(response.data)
    })
    .catch(error => {
    })
}

const platosCorriente = () => {
    Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/platosCorriente`).then((response)=>{
        setCorriente(response.data)
    })
    .catch(error => {
    })
}

const bebidas = () => {
    Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/bebidas`).then((response) => {
        setBebida(response.data)
    })
    .catch(error => {
    })
}

useEffect(()=>{
    platosSancocho()
    platosCorriente()
    bebidas()
},[])

return(
    <Container>
        <Container2>
            <H1>SANCOCHOS</H1>
            <Box2>
                {sancocho.map((comida, index)=>
                <Link to={`/pedido/${comida.id_plato}`} key={index} style={{textDecoration:"none",cursor:"inherit"}}> 
                    <Minibox1  key={index} >
                        <Img src={`${process.env.REACT_APP_PRIMERO_UNO}/api/` + comida.imagen} alt={comida.nombre_plato}></Img>
                        <Box1>
                            <H4 style={{margin:"0",marginTop:"3rem",fontSize:"20px", cursor:"pointer"}}>{comida.nombre_plato}</H4>
                            <H4_2 style={{margin:"0",fontSize:"20px", cursor:"pointer"}}>${comida.precio}</H4_2>
                        </Box1>
                    </Minibox1>                            
                </Link>
                )}
            </Box2>
            <H1>CORRIENTES</H1>
            <Box2> 
                {corriente.map((comida, index)=>
                <Link to={`/pedido/${comida.id_plato}`} key={index} style={{textDecoration:"none",cursor:"inherit"}} >
                    <Minibox1  key={index}>
                        <Img src={`${process.env.REACT_APP_PRIMERO_UNO}/api/` + comida.imagen} alt={comida.nombre}></Img>
                        <Box1>
                            <H4>{comida.nombre_plato}</H4>
                            <H4_2>${comida.precio}</H4_2>
                        </Box1>
                    </Minibox1>
                </Link>
                )}
            </Box2>
            <H1>BEBIDAS</H1>
            <Box3>
                {bebida.map((jugo,index) =>
                <Link to={`/pedidoBebida/${jugo.id_bebida}`} key={index} style={{textDecoration:"none",cursor:"inherit"}}>
                    <Minibox1 key={index}>
                        <Img src={`${process.env.REACT_APP_PRIMERO_UNO}/api/` + jugo.imagen} alt={jugo.nombre_bebida}></Img>
                        <Box1>
                            <H4>{jugo.nombre_bebida}</H4>
                            <H4_2>${jugo.precio}</H4_2>
                        </Box1>
                    </Minibox1>
                </Link>
                )}  
            </Box3>
        </Container2>
    </Container>
)
}