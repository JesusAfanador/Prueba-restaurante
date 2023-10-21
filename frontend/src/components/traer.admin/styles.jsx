import styled from "styled-components";

export const Contenedor = styled.div`
    font-family: var(--tipo-letra);
    width: 100%;
    height: 100%;
    display : flex;
    @media (max-width: 480px){
        height: 100em;   
    }
`;

export const Button = styled.button`
    height: 3em;
    background-color: var(--color-azul);
    color: #ffffff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 155px;
    font-size: 18px;
    display: flex;
    align-items: center;
`;

export const Main = styled.main`
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
`;

export const Box2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4em;
    cursor: pointer;
`;

export const Tabla = styled.table`
    height: 70%;
    width: 90%;
    border-collapse: collapse;
`;

export const Thead = styled.thead`
    background-color: rgb(128, 126, 126);
    color: #000;
    height: 40px;
`;

export const Tr = styled.tr`
`;

export const Th = styled.th`
    padding: 5px 10px;
    font-size: 20px;
`;

export const Tbody = styled.tbody`
    background-color: white;
`;

export const Td = styled.td`
    text-align: center;
    font-size: 18px;
    border: 1px solid black;
    margin: 0;
`;

export const Box3 = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Borrar = styled.button`
    background-color: #000000;
    border: 1px solid black;
    display: flex;
    align-items: center;
    width: 80px; 
    height: 25px;
    color: white;
    cursor: pointer;
    border-radius: 5px; 
`;

export const Editar = styled.button`
    background-color: white;
    border: 1px groove black;
    display: flex;
    align-items: center;
    width: 80px;
    height: 25px;
    color: black;
    cursor: pointer;
    border-radius: 5px;
`;

export const Titulo = styled.h1`
    font-family: var(--tipo-letra);
    color: black;
    justify-content: center;
    margin: 0;
`;
