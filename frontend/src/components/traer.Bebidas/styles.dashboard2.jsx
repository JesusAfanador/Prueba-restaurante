import styled from "styled-components"
import "../../App.css"

export const Pagina = styled.div`
    font-family: var(--tipo-letra);
    height: 100vh;
    width: 100%;
`;

export const Background = styled.div`
    height: 100%;
    width: 100%;
`;

export const Receta = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const Box = styled.div`
    display: flex;
`;

export const H1 = styled.h1`
    color: black;
    font-size: 40px;
`;

export const Box2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4em;
    cursor: pointer;
`;

export const Box3 = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    color: #ffff;
    background-color: var(--color-negro);
`;

export const H2 = styled.div`
    font-size: 25px;
`;

export const H2_2 = styled.div`
    width: 400px;
    font-size: 25px;
`;

export const Button = styled.div`
    height: 3em;
    background-color: var(--color-azul);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 150px;
    font-size: 18px;
`;

export const ContentImg = styled.div`
    height: 200px;
    width: 200px;
    background-color: #acacac6e;
    background-repeat: no-repeat;
    background-size: 97%;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @media  screen and (max-height: 600px ) {
        height: 210px;
        width: 150px;
    }
`;

export const Box6 = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-evenly;
`;

export const ImgPlato = styled.img`
    height: 135px;
    width: 130px;
    margin-right: 15px;
    transform: rotate(-3deg);
    position: relative;;
    left: 3%;
    top: -2%;
`;

export const DivPrincipal = styled.div`
    height: 100%;
    width: 90%;
    background-color: var(--color-negro);
    display: flex;
    flex-direction: column;
    border-radius: 0 0  8px 8px ;
    position: relative;
    overflow-y: auto;
    &::-webkit-scrollbar-thumb {
        background: #000000; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
        width: 6px;
    }
    @media  screen and (max-width: 670px ) {
    }
    @media  screen and (min-width: 1020px ) {
        height: 60%;
        width: 80%;
    }
    @media  screen and (max-height: 450px ) {
        height: 200%;
        box-shadow: none;
    }
`;

export const Box4 = styled.div`
    position: relative;
    top: 9%;
`;

export const Contendiv = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    color: white;
`;

export const Borrar = styled.button`
    width: 130px;
    height: 3em;
    color: #ffff;
    background-color: var(--color-azul);
    border: none;
    border-radius: 5px;
    font-size:18px;
    cursor: pointer;
`;

export const DivFilas = styled.div`
    width:100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Box5 = styled.div`
    width: 100px;
    font-size: 20px;
`;

export const Editar = styled.button`
    border: none;
    width: 130px;
    height: 3em;
    background-color: var(--color-azul);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size:18px;
`;
