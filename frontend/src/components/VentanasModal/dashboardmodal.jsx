import React from "react";
import styled from "styled-components";
import Cumplidopro from "../Img/Bien.gif"
import { useNavigate } from "react-router-dom";

const Agregadopro = () => {
    const navigate = useNavigate()
return (
    <div>
        <Fondo>
            <Container>
                <Exito></Exito>
            </Container>
        </Fondo>      
    </div>
    )
}

export default Agregadopro

const Fondo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    background-color: #ffffff;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    height: 25em;
    width: 30em;
    border-radius: 2em;
    filter: drop-shadow(6px 15px 8px black);
`;

const Salida = styled.button`
    margin-bottom: 50em;
    border-radius: 2em;
    border: none;
    height: 4em;
    width: 4em;
    margin: 1em;
`;

const Exito = styled.div`
    background-image: url(${Cumplidopro});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 16em;
    width: 30em;
    display: flex;
    align-items: center;
`;