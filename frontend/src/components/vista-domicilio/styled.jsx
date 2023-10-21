import styled from "styled-components"
import Fondo from "../Img/FondoMenu.jpg"
import letrero2 from "../Img/letrero2.jpg"

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Fondo});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Conatiner2 = styled.div`
    height: 37rem;
    width: 50rem;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(5px); 
    background-image: url(${letrero2}) ;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;
    box-shadow: 10px 10px 25px 15px #000000;
    box-shadow: -10px 15px 15px 0px;
    @media screen and (max-width: 60rem) {
        width: 40rem;
    }
    @media screen and (max-width: 50rem) {
        width: 30rem;
    }
    @media screen and (max-width: 40rem) {
        width: 20rem;
    }
`;

export const Container3 = styled.div`
    width: 50rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 40rem) {
        width: 23rem;
    }
`;

export const Box = styled.div`
    width: 20rem;
    height: 3rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
`;

export const Box2 = styled.div`
    width: 40rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    @media screen and (max-width: 40rem) {
        width: 20rem;
        text-align: center;
    }
`;

export const Box3 = styled.div`
    width: 23rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: white;
    padding-left: 10px;
    justify-content: space-evenly;
    @media screen and (max-width: 60rem) {
        width: 17rem;
    }
    @media screen and (max-width: 50rem) {
        width: 12rem;
    }
    @media screen and (max-width: 40rem) {
        width: 8rem;
    }
`;

export const Box4 = styled.div`
    width: 23rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;
    @media screen and (max-width: 60rem) {
        width: 20rem;
    }
    @media screen and (max-width: 50rem) {
        width: 17rem;
    }
    @media screen and (max-width: 40rem) {
        width: 11rem;
    }
`;

export const Box5 = styled.div`
    height: 7rem;
    width: 20em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
`;

export const Infor = styled.input`
    background-color: transparent;
    color: #000000;
    border-radius: 0.5em;
    border: 2px solid #ffff;
    height: 2.5em;
    font-size: 18px;
`;

export const Ordenar = styled.button`
    background-color: transparent;
    text-align: center;
    font-size: 14px; 
    color: white;
    border-radius: 1em;
    border: 2px solid #ffff;
    height: 3.5em;
    width: 10em;
    font-style: italic;
    cursor: pointer;
`;

export const Salir = styled.button`
    background-color: transparent;
    text-align: center;
    font-size: 14px; 
    color: white;
    border-radius: 1em;
    border: 2px solid #ffff;
    height: 3.5em;
    width: 10em;
    font-style: italic;
    cursor: pointer;
`;

