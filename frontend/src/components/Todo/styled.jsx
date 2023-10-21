import styled from "styled-components";
import Tabla from "../Img/letrero.jpg"
import Fondo from "../Img/FondoMenu.jpg"
import logo1 from "../Img/Unido.png"

export const Background = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-image: url(${Fondo});
    background-repeat: no-repeat;
    background-position: center;
    background-position: center;
    background-attachment: fixed;
    @media screen and (max-width: 480px ){
    height: 125em,;
    display: flex;
    justify-content: center;
    }
`;

export const Container3 = styled.div`
    width: 100%;
    height: 20rem;                                                 
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 100rem) {
        flex-direction: column;
    }
`;

export const Minibox2 = styled.div`
    width: 80rem;
    height: 10rem;                         
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 112rem){
        width: 70rem;
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

export const H1_2 = styled.h1`
    cursor: pointer;
`;

export const Box1 = styled.div`
    height: 12rem;
    width: 30rem;
    font-size: 40px;
    display: flex;
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
    filter: drop-shadow( -5px, 10px, 6px black);
`;

export const Notificacion = styled.h4`
    background-color: yellow;
    border-radius: 2em;
    width: 25px;
    height: 25px;
    margin-bottom: 80px;
`;

export const Container4 = styled.div`
    width: 100%;
    height: 15rem;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 30rem){
        width: 20rem;
        margin-top: 4em;
        flex-direction: column;
        justify-content: center;
        height: 12rem;
    }
`;

export const Minibox3 = styled.div`
    width: 30rem;
    height: 12rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: space-evenly;
    @media screen and (max-width: 30rem){
        width: 22rem;
        margin-top: 1em;
        flex-direction: column;
        height: 12rem;
    }
`;

export const H2 = styled.h2`
    -webkit-text-stroke: 1.1px black;
    font-weight: bold;
    text-shadow: 5px 5px 5px black;
    filter: drop-shadow( -0px 0px 0px black);
    font-size: 29px;
    margin: 0;
`;

export const H2_2 = styled.h2`
    -webkit-text-stroke: 1.1px black;
    font-weight: bold;
    text-shadow: 5px 5px 5px black;
    filter: drop-shadow( -0px 0px 0px black);
    font-size: 29px;
`;

export const Box2 = styled.div`
    width: 9rem;
    display: flex;
    justify-content: space-evenly;
`;

export const A = styled.a`
    text-decoration: none;
`;

export const A2 = styled.a`
    font-size: 30px;
    color: #0011ff;
    border-radius: 14px;
`;

export const A3 = styled.a`
    font-size: 32px;
    color: #f50488;
    border-radius: 80px;
`;

export const Minibox4 = styled.div`
    width: 10rem;
    height: 10rem;
    background-image: url(${logo1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(-0px -7px 5px white);
    @media screen and (max-width: 30rem){
        margin-top: 2rem;
    }
`;

export const Span = styled.span`
    font-size: 20px;
`;

export const Span2 = styled.span`
    font-size: 20px;
    color:white;
    text-decoration: none;
`;