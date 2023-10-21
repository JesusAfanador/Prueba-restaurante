import styled from "styled-components"

export const Background = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const ContPrincipal = styled.div`
    border: solid 1px;
    width: 60%;
    height: 80%;
    background-color: rgba(05, 05, 05, .5);  
    backdrop-filter: blur(10px);
    border-radius: 20px;
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const H1 = styled.h1`
    text-align: center;
    color: white;
`;

export const ContFactura = styled.div`
    height: 22rem;
    margin-bottom: 20px;
    padding-top: 20px;
    overflow-y: auto;
    border-bottom: dashed;
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        border-spacing: 0;
        @media (min-width: 768px) {
            margin-top: 20px;
        }
    }
    th, td {
        padding: 10px; 
        text-align: center;
        @media (min-width: 768px) {
            padding: 10px; 
        }
    }
    th {
        background-color: #f2f2f2;
    }
    tbody tr {
        margin-bottom: 10px;
        @media (min-width: 768px) {
            margin-bottom: 10px;
        }
    }
`;

export const Table = styled.table`
`;

export const Thead = styled.thead`
`;

export const Tr = styled.tr`
`;

export const Th = styled.th`
    background-color: transparent;
    color: white;
    font-size: 20px;
`;

export const Tbody = styled.tbody`
`;

export const Td = styled.td`
    color: white;
    font-size: 20px;
`;


export const ResPrecios = styled.div`
    padding: 20px;
    overflow-y: auto; 
    max-height: 30vh;
    font-size: 16px;
    @media (min-width: 768px) {
        max-height: initial;
        font-size: 20px;
    }
`;

export const Box = styled.div`
    margin-top: 20px;
    text-align: right;
`;

export const P = styled.p`
    color: white;
    margin: 0;
    font-weight: bolder;
    font-size: x-large;
    font-style: italic;
`;

export const ContBoton = styled.div`
    display: flex;
    justify-content: center;
`;

export const BotonImprimir = styled.button`
    color: #fffafa;
    background-color: black;
    border: solid 1px;
    border-radius: 20px;
    font-style: italic;
    cursor: pointer;
    font-size: 15px;
    &:hover{
        background-color: #1f52e0;
    }
`;