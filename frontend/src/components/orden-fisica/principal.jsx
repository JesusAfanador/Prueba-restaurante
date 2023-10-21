import React, { useEffect, useState, useRef } from "react";
import { Container, ConTitulos, Titulos, Span, Eliminar, Pedir, Conten } from "./styled";
import { Link, useNavigate } from "react-router-dom";   


const CarritoFisica = () => {
    const navegate = useNavigate()
    const [totalPrecio, setTotalPrecio] = useState(0);
    const [plato, setPlatos] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const plato = JSON.parse(localStorage.getItem("platico"));
        const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
        if (Array.isArray(plato)) {
            setPlatos(plato);
            const total = plato.reduce((acumulador, compra) => acumulador + compra.precio, 0);
            setTotalPrecio(total);
        }
        setPlatos(platoLocalStorage);
    }, []);
    const eliminar = (index) => {
        const platoLocalStorage = JSON.parse(localStorage.getItem("platico"));
        if (Array.isArray(platoLocalStorage) && index >= 0 && index < platoLocalStorage.length) {
            platoLocalStorage.splice(index, 1);
            localStorage.setItem("platico", JSON.stringify(platoLocalStorage));
            const total = platoLocalStorage.reduce((acumulador, compra) => acumulador + compra.precio, 0);
            setTotalPrecio(total);
            setPlatos(platoLocalStorage);
            window.location.reload()
        }
    };

    const transferirDatos = () => {
        if( plato.length > 0){
        const datosAEnviar = plato;
        localStorage.setItem("datosAEnviar", JSON.stringify(datosAEnviar));
        navegate("/private/todofisica/recibir-orden")
        window.location.reload(); 
        }   
    };

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
            {modalAbierta && ( 
            <Container>
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
                                <Titulos><Span>${compra.precio}</Span> </Titulos>
                                <Eliminar onClick={() => eliminar(index)}>X</Eliminar>
                            </ConTitulos>
                        ))
                    ) : ""}
                </Conten>
                <ConTitulos>
                    <Titulos>Total: <Span>${totalPrecio}</Span></Titulos>
                        <Pedir onClick={transferirDatos}>🛒Enviar Orden</Pedir>
                </ConTitulos>
            </Container>
            )}
        </div>
    );
};

export default CarritoFisica;
