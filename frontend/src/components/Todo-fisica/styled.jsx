import styled from "styled-components";
import Tabla from "../Img/letrero.jpg"
import Fondo from "../Img/FondoMenu.jpg"
import logo1 from "../Img/Unido.png"

export const Background = styled.div`
    height: auto;
    background-image: url(${Fondo});
    background-repeat: no-repeat;
    background-position: center;
    background-position: center;
    background-size: 100% 100%;
    margin: 0; 
    padding: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Container = styled.div`
    width: 100%;
    height: 15rem;                                                 
    display: flex;
    align-items: center;
    @media screen and (max-width: 100rem) {
    }
`;

export const Minibox2 = styled.div`
    width: 80rem;
    height: 5rem;                         
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 112rem){
        width: 70rem;
        margin-top: 3em;
    }
    @media screen and (max-width: 70rem){
        width: 60rem;
    }
    @media screen and (max-width: 50rem){
        width: 50rem;
    }
    @media screen and (max-width: 40rem){
        width: 40rem;
    }
    @media screen and (max-width: 30rem){
        width: 23rem;
        margin-top: 1em;
        flex-direction: column;
        height: 12rem;
    }
`;

export const Button = styled.button`
    width: 15rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: white;
    text-shadow: 5px 5px 5px  black;
    -webkit-text-stroke: 1.5px black;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    :hover{
        transform:scale(1.25);
    }
    &:active {
        animation: none; 
        transform: translateX(2px);
    }
    @media screen and (max-width: 50rem){
        margin-top: 1rem;
    }
`;

export const Box1 = styled.div`
    height: 12rem;
    width: 30rem;
    font-size: 40px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background-image: url(${Tabla});
    background-size: cover;
    background-position: center;
    box-shadow: -15px 15px 10px;
    transform: rotate(-4deg);
    margin-left: 50px;
    font-family: 'Courgette', cursive;
    @media screen and (max-width: 30rem){
        height: 8rem;
        width: 19.7rem;
        margin-right: 3rem;
    }
`;

export const H1 = styled.h1`
    color: #ffffff93;
    margin: 0;
    filter: drop-shadow( -5px 10px 6px black);
`;

export const H1_2 = styled.h1`
    cursor: pointer;
`;

export const Notificacion = styled.h4`
    background-color: yellow;
    border-radius: 2em;
    width: 25px;
    height: 25px;
    margin-bottom: 80px;
    font-size: 22px;
    filter: drop-shadow( -1px 10px 5px black);
`;
