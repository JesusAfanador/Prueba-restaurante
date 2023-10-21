import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
`;

export const ConteCarrusel = styled.div`
  width: 100%;
  height: 45em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
`;

export const Box = styled.div`
  text-align: center;
`;

export const Contenedor = styled.div`
  height: 40em;
  width: 70em;
  color: #ffff;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1450px) {
    width: 60em;
  }
  @media screen and (max-width: 1000px) {
    width: 40em;
  }
  @media screen and (max-width: 700px) {
    width: 20em;
  }
`;

export const H1 = styled.h1`
  font-size: 5em;
  filter: drop-shadow( -5px 5px 1px #ff9d00);
`;

export const H2 = styled.h2`
  font-size: 2em;
  filter: drop-shadow( -5px 5px 1px #000000);
`;

export const H3 = styled.h3`
  font-size: 1.5em;
  filter: drop-shadow( -5px 5px 1px #000000) ;
`;

export const Box2 = styled.div`
  height: 400px;
  width: 420px;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 2em;
`;