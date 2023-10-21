import styled from "styled-components";

export const Background = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    flex-direction: column;
`;

export const ContPrincipal = styled.div`
    border: solid 1px;
    width: 65%;
    height: 71%;
    background-color: rgba(05, 05, 05, .5);  
    backdrop-filter: blur(5px);
    box-shadow: 13px 10px 5px 0px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

export const Boton = styled.button`
    border-radius: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #1f52e0;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
`;

export const Thead = styled.div`
    background-color: #000;
    width: 100%;
    border-radius: 20px 20px 0 0;
`;

export const Tbody = styled.div`
    max-height: 620px;
    overflow-y: auto;
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
    margin-right: 60px;
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