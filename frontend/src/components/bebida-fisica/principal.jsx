import { useState, useEffect } from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Background, Platos, ConImg, Contenido, ImgPlato, Titulo, NomPlato, Aumentar, Botones, Agregar, Plato, Container, CajaImg } from "./styled"

const BebidaFisica = () => {
    const [bebida, setBebida] = useState({});
    const [contar, setContar] = useState(1)
    const nombrePlato = bebida.nombre_bebida
    const precioUnitarios = bebida.precio
    const [precios, setPrecios] = useState([])
    const suma = () => {
        if (contar < 100) {
            setContar(contar + 1)
            setPrecios(precios + precioUnitarios)
        }
    }
    const restar = () => {
        if (contar > 1) {
            setContar(contar - 1)
            setPrecios(precios - precioUnitarios)
        }
    }
    const agrega = () => {
        const nuevoPlato = { nombre_plato: nombrePlato, cantidad: contar, precio: precios };
        setPlatos([...platos, nuevoPlato]);
        window.location.reload()
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
    const obtenerBebida = async () => {
        try {
            const response = await Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/bebida/${id}`);
            setBebida(response.data);
            setPrecios(response.data.precio)
        } catch (error) {
        }
    }
    useEffect(() => {
        obtenerBebida();
    }, []);

return (
    <>
        <Background>
            <Platos style={{ backgroundColor: bebida.colores }}>
                <Titulo>
                    <NomPlato>{bebida.nombre_bebida}</NomPlato>
                </Titulo>
                <Container>
                    <ConImg>
                        <CajaImg>
                            <ImgPlato src={`${process.env.REACT_APP_PRIMERO_UNO}/api/` + bebida.imagen} style={{ filter: "drop-shadow(-3px 10px 6px black)" }}></ImgPlato>
                        </CajaImg>
                        <Contenido>Precio: ${bebida.precio}</Contenido>
                    </ConImg>
                    <Plato>
                        <Contenido style={{ marginLeft: "2em", marginRight: "2em", textAlign: "center" }}>Descripcion: {bebida.descripcion}</Contenido>
                        <Aumentar>
                            <Botones onClick={restar}>-</Botones>
                            <Contenido>{contar}</Contenido>
                            <Botones onClick={suma}>+</Botones>
                        </Aumentar>
                        <Aumentar>
                            <Agregar onClick={() => agrega()}>Agregar a Pedido</Agregar>
                            <Link to="/private/todofisica/fisica" style={{cursor:"inherit"}}> <Agregar>Volver a Menu</Agregar></Link>
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

export default BebidaFisica