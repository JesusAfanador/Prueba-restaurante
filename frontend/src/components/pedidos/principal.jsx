import { useState, useEffect } from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Background, Platos, ConImg, Contenido, ImgPlato, Titulo, NomPlato, Aumentar, Botones, Agregar, Plato, Container, Logito, CajaImg, Plato2 } from "./styled"
import Agregado from "../VentanasModal/agregaCarrito"

const Pedidos = () => {
    const [enviado, setEnviado] = useState(false)
    const [plato, setPlato] = useState({});
    const [contar, setContar] = useState(1)
    const nombrePlato = plato.nombre_plato
    const precioUnitarios = plato.precio
    const [precios, setPrecios] = useState([])
    const suma = () => {
    if(contar < 100){
        setContar(contar + 1)
        setPrecios(precios + precioUnitarios)
    }  
    }
    const restar = () => {
    if(contar > 1 ){
    setContar(contar - 1)
    setPrecios(precios - precioUnitarios)
    }
    }
    const obtenerPlato = async () => {
        try {
            const response = await Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/plato/${id}`);
            setPlato(response.data);
            setPrecios(response.data.precio) 
        } catch (error) {
        }
    }
    const agrega = () => { 
    const nuevoPlato = { nombre_plato: nombrePlato, cantidad: contar, precio: precios }; 
    setPlatos([...platos, nuevoPlato]);
    setEnviado(!enviado)
    };
    const [platos, setPlatos] = useState(() => { 
    const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
    return Array.isArray(platoLocalStorage) && platoLocalStorage.length > 0
        ? platoLocalStorage
        : [];
    });
    useEffect(() => { 
    localStorage.setItem("platico", JSON.stringify(platos));
    }, [platos]);
const { id } = useParams();
useEffect(() => {
    obtenerPlato();
}, []);

return (
<>
    {enviado && <Agregado/>}
    <Background style={{width:"100%"}}>
        <Platos>
            <Titulo>
                <NomPlato>{plato.nombre_plato}</NomPlato>
            </Titulo>
            <Container>
                <ConImg>
                    <CajaImg>
                        <ImgPlato src={`${process.env.REACT_APP_PRIMERO_UNO}/api/` + plato.imagen} style={{filter: "drop-shadow(-3px 10px 6px black)"}}></ImgPlato>  
                    </CajaImg>
                    <Contenido>Precio: ${plato.precio}</Contenido>
                    <Plato2>
                    <Contenido style={{marginLeft:"2em", marginRight:"2em", textAlign:"center"}}>Descripcion: {plato.descripcion}</Contenido>            
                    <Aumentar>
                        <Botones onClick={restar}>-</Botones>
                        <Contenido>{contar}</Contenido>
                        <Botones onClick={suma}>+</Botones>
                    </Aumentar>
                    <Aumentar>
                        <Agregar onClick={() => agrega()}>Agregar a Pedido</Agregar>
                        <Link to="/menu"><Agregar>Volver a Menu</Agregar></Link>
                    </Aumentar>
                    <Aumentar>
                        <Contenido>Total: ${precios}</Contenido>
                    </Aumentar>
                    </Plato2>
                </ConImg>
                <Plato>
                    <Contenido style={{marginLeft:"2em", marginRight:"2em", textAlign:"center"}}>Descripcion: {plato.descripcion}</Contenido>            
                    <Aumentar>
                        <Botones onClick={restar}>-</Botones>
                        <Contenido>{contar}</Contenido>
                        <Botones onClick={suma}>+</Botones>
                    </Aumentar>
                    <Aumentar>
                        <Agregar onClick={() => agrega()}>Agregar a Pedido</Agregar>
                        <Link to="/menu"><Agregar>Volver a Menu</Agregar></Link>
                    </Aumentar>
                    <Aumentar>
                        <Contenido>Total: ${precios}</Contenido>
                    </Aumentar>
                </Plato>
            </Container>             
        </Platos>
    </Background>
</>
)
}

export default Pedidos