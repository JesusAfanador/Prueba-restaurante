import styled from "styled-components";
import nota from "../Img/Notas.jpg"

export const Fondo = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const Select = styled.div`
    height: 50em;
    width: 90em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Titulo = styled.div`
    height: 5em;
    width: 90em;
    color: #ffff;
    text-align: center;
    @media screen and (max-width: 1400px) {
        width: 80em;
    }
    @media screen and (max-width: 1200px) {
        width: 60em;
    }
    @media screen and (max-width: 600px) {
        width: 27em;
    }
    @media screen and (max-width: 600px) {
        width: 23em;
    }
`;

export const Domicilio = styled.h1`
    margin: 0;
    text-shadow: 5px 5px 5px  black;
    -webkit-text-stroke: 1.5px black;
`;

export const Pedido = styled.div`
    height: 45em;
    width: 90em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-content: space-evenly;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar-thumb {
        background: #000000;
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
    @media screen and (max-width: 1400px) {
        width: 80em;
    }
    @media screen and (max-width: 1200px) {
        width: 60em;
    }
    @media screen and (max-width: 920px) {
        width: 40em;
    }
    @media screen and (max-width: 600px) {
        width: 23em;
    }
`;

export const Pendiente = styled.button`
    background-image: url(${nota});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9;
    height: 30%;
    width: 80%;
    border: 0;
    box-shadow: 10px 10px 10px black;
    flex-grow: 1;
    flex-basis: 20%;
    margin-top: 1em;
    margin-left: 1em;
    margin-right: 1em;
    text-align: center;
    cursor: pointer;
    @media screen and (max-width: 1200px) {
        width: 70%;
        flex-basis: 30%;
    }
    @media screen and (max-width: 1000px) {
        width: 60%;
        flex-basis: 40%;
    }
    @media screen and (max-width: 920px) {
        width: 50%;
        flex-basis: 50%;
    }
    @media screen and (max-width: 600px) {
        width: 10%;
        flex-basis: 90%;
    }
`;

export const H2 = styled.h2`
    margin: 0;
`;

export const Regresar = styled.button`
    width: 10rem;
    height: 2rem;
    color: #fffafa;
    background-color: black;
    border: solid 1px;
    border-radius: 20px;
    font-style: italic;
    cursor: pointer;
    font-size: 15px;
    &:hover{
        background-color: #1f52e0;
    }
`;

export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Notificacion = styled.h4`
    background-color: yellow;
    border-radius: 2em;
    width: 30px;
    height: 30px;
    text-shadow: 5px 5px 5px  black;
    -webkit-text-stroke: 1.5px black;
    margin-left: 15px;
`;