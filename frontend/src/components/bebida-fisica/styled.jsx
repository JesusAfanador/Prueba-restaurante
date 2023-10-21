import styled from "styled-components";
import FondoComida from "../Img/fondoComida.jpg"
import letrero2 from "../Img/letrero2.jpg"

export const Background = styled.div`
    font-family: var(--tipo-letra);
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Platos = styled.div`
    height: 35em;
    width: 55em;
    box-shadow: 10px 10px 10px black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background-image: url(${letrero2}) ;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;
    box-shadow: 10px 10px 25px 15px #000000;
    @media screen and (max-width: 768px) {
        height: auto;
        width: 90%;
    }
`;

export const Titulo = styled.div`
    width: 60em;
    height: 4em;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        height: auto;
        width: 90%;
    }
`;

export const Container = styled.div`
    display: flex;
    height: 50em;
    width: 70em;
    @media screen and (max-width: 98vh){
        height: 50em;
        width: 40em;
    }
`;

export const NomPlato = styled.h1`
    color: white;
    font-style: italic;
`;

export const Contenido = styled.h3`
    color: white;
    font-size: 28px;
    font-style: italic;
`;

export const ConImg = styled.div`
    height: 30em;
    width: 30em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
        width: 90%;
        margin-top: 2em;
    }
`;

export const CajaImg = styled.div`
    background-image: url(${FondoComida});
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: -2px 10px 10px black;
    border-radius: 15px;
    margin-top: 2em;
    height: 20em;
    width: 25em;
    @media screen and (max-width: 768px) {
        width: 95%;
        height: auto;
    }
`;

export const ImgPlato = styled.img`
    border-radius: 15px;
    height: 20em;
    width: 25em;
    @media screen and (max-width: 768px) {
        width: 95%;
        height: auto;
    }
`;

export const Aumentar = styled.div`
    height: 5em;
    width: 30em;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const Botones = styled.button`
    margin-left: 10px;
    margin-right: 10px;
    height: 2em;
    width: 5em;
    background-color: white;
    border: 2px solid #000;
    border-radius: 0.5em;
    cursor: pointer;
`;

export const Agregar = styled.button`
    height: 3em;
    width: 10em;
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    border: 2px solid #000;
    border-radius: 0.5em;
    font-style: italic;
    cursor: pointer;
`;

export const Plato = styled.div`
    height: 30em;
    width: 23em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly
`;

export const Adicional = styled.div`
    width: 20em;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Infor = styled.input`
    width: 10em;
    height: 2em;
    border: 2px solid #000;
    margin-left: 1em;
    background-color: transparent;
    border-radius: 5px;
    @media screen and ( max-width: 90vh){   
        height: 2em;
        width: 20em; 
    }
`;

export const Ingredientes = styled.input`
    margin-top: 23px;
    height: 17px;
    width: 17px;
`;