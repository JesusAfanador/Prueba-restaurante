import styled from "styled-components"
import fondo from "../Img/letrero.jpg"


export const Container = styled.div`
    backdrop-filter: blur(-2px); 
    background-size: cover;
    background-position: center;
    background-color:transparent;
    color: #000000;
    -webkit-text-stroke: 0.1px #000000;
    height: 33em;
    width: 31em;
    border-radius:10px;
    position: absolute;
    z-index: 1;
    margin-bottom: 16em;
    margin-left: 33em;
    bottom: 0;
    left: 0;
    filter: drop-shadow(10px 20px 15px black);
`;

export const ConTitulos = styled.div`
    background-image: url(${fondo});
    background-size: cover;
    background-position: center;
    border-radius:5px;
    height: 5em;
    width: 30em;
    margin: 0;
    text-align: center;
    filter: drop-shadow(7px 10px 10px black);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Conten = styled.div`
    max-height: 26em;
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
`;

export const Titulos = styled.h3`
    filter: drop-shadow(7px 10px 5px black);
    color: white;
    text-shadow: 3px 3px 3px black;
`;

export const Span = styled.span`
    color: #ffffff;
`;

export const Eliminar = styled.button`
    height: 3em;
    border: none;
    box-shadow: 1px 2px 3px black;
    background-color: red;
    width: 3em;
    color: white;
    cursor: pointer;
    border-radius: 2em;
    filter: drop-shadow(7px 10px 10px black);
`;

export const Pedir = styled.button`
    background-color: #bd2308;
    color: white;
    height: 3em;
    width: 10em;
    border-radius: 2em;
    border: none;
    cursor: pointer;
    filter: drop-shadow(7px 10px 10px black);
`;
