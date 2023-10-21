import styled from "styled-components";

export const Background = styled.div`
    font-family: var(--tipo-letra);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Box = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
`;

export const ContPrincipal = styled.div`
    background-color: var(--color-negro);
    border: solid 1px;
    width: 65%;
    height: 71%;
    backdrop-filter: blur(5px);
`;

export const P = styled.p`
    color: black;
    font-size: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    color: black;
`;

export const Input = styled.input`
    margin-right: 50px;
`;

export const Boton = styled.button`
    border: none;
    width: 130px;
    height: 3em;
    background-color: var(--color-azul);
    border-radius: 5px;
    cursor: pointer;
    font-size:18px;
    color: white;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
`;

export const Thead = styled.div`
    background-color: #000;
    width: 100%;
`;

export const P2 = styled.p`
`;

export const Tbody = styled.div`
    max-height: 540px;
    overflow-y: auto;
    &::-webkit-scrollbar-thumb {
        background: #000000; 
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
        width: 6px;
    }
`;

export const Tr1 = styled.tr`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const Tr2 = styled.tr`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

export const Th = styled.th`
    padding: 15px;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #000000;
    color: white;
    margin: 0;
    margin-right: 38px;
    font-size: 20px;
`;

export const Td = styled.td`
    padding: 10px;
    margin: 0;
    color: white;
    font-size: 18px;
    z-index: 0;
    margin-right: 10px;
    font-size: 20px;
`;

export const TdMesa = styled(Td)`
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 10px;
`;