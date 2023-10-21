import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Axios from "axios"
import tablap from "../Img/bandeja.png"
import { Container, Box1, Box2, Box3, Container2, Minibox1, Img, H1, H4, H4_2} from "./Styled"
import { useAuthContext } from "../context/AuthContext";
import Comprobando from "../VentanasModal/comprobando";

export const Fisica = () => {
    const [sancocho, setSancocho] = useState([])
    const [corriente, setCorriente] = useState([])
    const [bebida, setBebida] = useState([])
    const [destokenado, setDestokenado] = useState("")
    const [activo, setActivo] = useState(false)
    const { token, logout } = useAuthContext();
    const [comprobar, setComprobar] = useState(true) 
    const decodeJWT= (token) => {
        try{
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const decode = JSON.parse(jsonPayload);
        setDestokenado(decode.id)
    }
    catch{
        setActivo(true) 
    }
    }
    const cliente = async () => {
    await Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/admin/${destokenado}`,{
        headers: {
        Authorization: token
    } 
})
    .then((response) => {
        setComprobar(false)
    })
    .catch(error =>{
        if(error){
            logout()
            
        }
    })
}

useEffect(() => {
    
    decodeJWT(token)
    
}, [])
setTimeout(() => {
    cliente()
    }, 100);

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
<>
    {comprobar && <Comprobando />}
    <Container>
        <Container2>
            <H1>SANCOCHOS</H1>
            <Box2>
                {sancocho.map((comida, index)=>
                <Link to={`/private/todofisica/pedidofisica/${comida.id_plato}`} key={index} style={{textDecoration:"none"}}> 
                <Minibox1  key={index}>
                    <Img src={`${process.env.REACT_APP_PRIMERO_UNO}/api/` + comida.imagen} alt={comida.nombre_plato}></Img>
                    <Box1>
                        <H4>{comida.nombre_plato}</H4>
                        <H4_2>${comida.precio}</H4_2>
                    </Box1>
                </Minibox1>                           
                </Link>
                )}
            </Box2>
            <H1>CORRIENTES</H1>
            <Box2> 
                {corriente.map((comida, index)=>
                <Link to={`/private/todofisica/pedidofisica/${comida.id_plato}`} key={index} style={{textDecoration:"none"}} >
                    <Minibox1 key={index}>
                        <Img src={`${process.env.REACT_APP_PRIMERO_UNO}/api/` + comida.imagen} alt={comida.nombre}></Img>
                        <Box1>
                            <H4>{comida.nombre_plato}</H4>
                            <h4_2>${comida.precio}</h4_2>
                        </Box1>
                    </Minibox1>
                </Link>
                )}
            </Box2>
            <H1>BEBIDAS</H1>
            <Box3>
                {bebida.map((jugo,index) =>
                <Link to={`/private/todofisica/bebidafisica/${jugo.id_bebida}`} key={index} style={{textDecoration:"none"}}>
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
</>
)
}