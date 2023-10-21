import styled from "styled-components";
import "../../../App.css"

export const Container = styled.div`
    font-family: var(--tipo-letra);
    height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

export const SubContainer = styled.div`
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
    color: #000;
    font-size: 40px;
`;

export const Box2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4em;
    cursor: pointer;
`;

export const Button = styled.button`
    height: 3em;
    width: 150px;
    color: white;
    background-color: var(--color-azul);
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
`;

export const Box3 = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    color: #ffff;
    background-color: var(--color-negro);
`;

export const H2 = styled.h2`
`;

export const InforTodo = styled.div`
    height: 100%;
    width: 80%;
    background-color: var(--color-negro);
    display: flex;
    flex-direction: column;
    border-radius: 0 0  8px 8px ;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar-thumb {
        background: #000000; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 6px;
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
    margin-bottom: 30px;
    @media  screen and (max-height: 600px ) {
        height: 210px;
        width: 150px;
    }
`;

export const Box5 = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-evenly;
`

export const DivFilas = styled.div`
    width:100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Borrar = styled.button`
    width: 100px;
    height: 3em;
    color: #ffff;
    background-color: var(--color-azul);
    border: none;
    border-radius: 5px;
    font-size:18px;
    cursor: pointer;
`;

export const Editar = styled.button`
    border: none;
    width: 100px;
    height: 3em;
    background-color: var(--color-azul);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size:18px;
`;