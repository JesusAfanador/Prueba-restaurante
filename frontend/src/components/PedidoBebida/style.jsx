import styled from "styled-components";
import FondoComida from "../Img/fondoComida.jpg"
import letrero2 from "../Img/letrero2.jpg"

export const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Platos = styled.div`
    height: 35em;
    width: 55em;
    background-image: url(${letrero2}) ;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;
    box-shadow: 10px 10px 25px 15px #000000;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 900px) {
        width: 40em;
    }
    @media screen and (max-width: 660px) {
        width: 30em;
        height: 50em;
    }    
    @media screen and (max-width: 500px) {
        width: 22em;
        margin-bottom: 3em;
    }
`;

export const Titulo = styled.div`
    width: 60em;
    height: 4em;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 900px) {
        width: 40em;
    }
    @media screen and (max-width: 660px) {
        width: 30em;
    }
    @media screen and (max-width: 500px) {
        width: 20em;
        margin-left: 1em;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50em;
    width: 55em;
    @media screen and (max-width: 900px) {
        width: 40em;
    }
    @media screen and (max-width: 660px) {
        width: 30em;
    }
    @media screen and (max-width: 500px) {
        width: 22em;
    }
`;

export const Logito = styled.img`
  height: 5em;
`;

export const NomPlato = styled.h1`
  color: white;
  font-style: italic;
`;

export const Contenido = styled.h3`
  color: white;
  font-size: 28px;
  font-style: italic;
  @media screen and (max-width: 660px) {
        font-size: 20px;
    }
`;

export const ConImg = styled.div`
    height: 30em;
    width: 30em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 900px) {
        width: 25em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 660px) {
        width: 20em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
    @media screen and (max-width: 900px) {
        box-shadow: -2px 10px 10px black;
        border-radius: 15px;
        margin-top: 2em;
        height: 18em;
        width: 20em;
    }
    @media screen and (max-width: 660px) {
        box-shadow: -2px 10px 10px black;
        border-radius: 15px;
        margin-top: 2em;
        width: 16em;
    }
`;

export const ImgPlato = styled.img`
    border-radius: 15px;
    height: 20em;
    width: 25em;
    @media screen and (max-width: 900px) {
        width: 20em;
    }
    @media screen and (max-width: 660px) {
        width: 15em;
        height: 15em;
    }
`;

export const Aumentar = styled.div`
    height: 5em;
    width: 30em;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 900px) {
        flex-direction: column;
        width: 15em;
        margin-top: 1em;
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
  @media screen and (max-width: 900px) {
    margin-top: 1em;
    height: 2em;
    width: 10em;
    background-color: white;
    border: 2px solid #000;
  }
`;

export const Plato = styled.div`
  height: 30em;
  width: 23em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 660px) {
    display: none
  }
`;

export const Plato2 = styled.div`
    height: 30em;
    width: 23em;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 660px) {
        height: 30em;
        width: 23em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`;