
import { useEffect, useState, useRef } from "react"
import { Container, Titulo, ConTitulos, Titulos, Eliminar, Pedir, Conten } from "./styled"
import { useNavigate } from "react-router-dom";
import Escoge from "../VentanasModal/eligeMenu";
import Delete from "../VentanasModal/eliminaTodo";

const Carrito = () => {
    const navigate = useNavigate()
    const [plato, setPlatos] = useState([])
    const [llenar, setLlenar] = useState(false)
    const [elimina, setElimina] = useState(false)
    const [totalPrecio, setTotalPrecio] = useState(0);
    useEffect(() => {
        const plato = JSON.parse(localStorage.getItem("platico"));
        if (Array.isArray(plato)) {
            const total = plato.reduce((acumulador, compra) => acumulador + compra.precio, 0);
            setTotalPrecio(total);
            setPlatos(plato);
        }
    }, []);

    const eliminar = (index) => {
        const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
        if (Array.isArray(platoLocalStorage) && index >= 0 && index < platoLocalStorage.length) {
            platoLocalStorage.splice(index, 1);
            localStorage.setItem("platico", JSON.stringify(platoLocalStorage));
            const total = platoLocalStorage.reduce((acumulador, compra) => acumulador + compra.precio, 0);
            setTotalPrecio(total);
            setPlatos(platoLocalStorage);
        }
        window.location.reload()
    }
    const noEnviar = () => {
        if (plato.length > 0) {
            navigate("/domicilio")
        } else {
            setLlenar(!llenar)
            setTimeout(() => {
                setLlenar(false)
            }, 2000)
        }
    }
    const vaciar = () => {
        if(plato.length > 0){
            localStorage.clear("platico")
            setPlatos([])
            setTotalPrecio(0);
            setElimina(!elimina)
            setTimeout(()=>{
                setElimina(false)
                window.location.reload()
            },2000)
        }else{
            setLlenar(!llenar)
            setTimeout(()=>{
                setLlenar(false)
            },2000)
        }
        }

    const modalRef = useRef(null);
    const [modalAbierta, setModalAbierta] = useState(true); 
    useEffect(() => {
        const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalAbierta(!modalAbierta); 
        }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={modalRef}>
            {elimina && <Delete/>}
            {llenar && <Escoge />}
            {modalAbierta && ( 
            <Container>
                <Titulo>Orden</Titulo>
                <ConTitulos>
                    <Titulos>Nombre</Titulos>
                    <Titulos>Cantidad</Titulos>
                    <Titulos>Precio</Titulos>
                    <Titulos>Eliminar</Titulos>
                </ConTitulos>
                <Conten>
                    {Array.isArray(plato) ? (
                        plato.map((compra, index) => (
                            <ConTitulos key={index}>
                                <Titulos>{compra.nombre_plato}</Titulos>
                                <Titulos>{compra.cantidad}</Titulos>
                                <Titulos><span style={{color:"#000000"}}>${compra.precio}</span></Titulos>
                                <Eliminar onClick={() => eliminar(index)}><h1 style={{ margin: "0" }}>X</h1></Eliminar>
                            </ConTitulos>
                        ))) : ""}
                </Conten>
                <ConTitulos>
                    <Titulos>Total: ${totalPrecio}</Titulos>
                    <Pedir onClick={noEnviar}>Pedir Order</Pedir>
                    <Pedir onClick={vaciar}>Vaciar</Pedir>
                </ConTitulos>
            </Container>
            )}
        </div>
    )
}

export default Carrito