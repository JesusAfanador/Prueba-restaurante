import styled from "styled-components";

export const Contenedor = styled.div`
    font-family: var(--tipo-letra);
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90em;
    height: 70em;
`;

export const Form = styled.form`
    background-color: var(--color-negro);
    width: 24em;
    height: 35rem;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
`;

export const Button = styled.button`
    border: none;
    width: 150px;
    height: 3em;
    background-color: var(--color-azul);
    border-radius: 5px;
    cursor: pointer;
    font-size:18px;
    color: white;
`;

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
`;

export const Input = styled.input`
    width: 23em;
    font-size: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
    &:focus {
        outline: none;
    }
`;

export const Textarea = styled.textarea`
    width: 23em;
    padding: 10px;
    font-size: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: white;
    background-color: transparent;
    margin-bottom: 10px;
    resize: vertical;
    &:focus {
        outline: none;
    }
`;

export const Cajatabla = styled.div`
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    width: 59em;
    height: 650px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #000000;
        border-radius: 5px;
    }
`;

export const Table = styled.table`
    width: 60em;
    color: #333;
    border-collapse: collapse;
`;

export const Tr = styled.tr`
    &:hover {
        background-color: #f5f5f5;
    }
`;

export const Th = styled.th`
    text-align: center;
    background-color: #807E7E;
    height: 2em;
    border: 1px solid black;
    font-size: 25px;
    color: white;
`;

export const Td = styled.td`
    border: 1px groove black;
    color: black;
    /* padding: 3px;   */
    font-size: 23px;
`;

export const Actualizar = styled.button`
    background-color: #040505;
    color: white;
    border-radius: 5px;
    border: none;
    width: 6em;
    height: 2em;
    margin: 1px;
    cursor: pointer;
`;

export const Cancelar = styled.button`
    background-color: #030202;
    color: white;
    border-radius: 5px;
    border: none;
    width: 6em;
    height: 2em;
    margin: 1px;
    cursor: pointer;
`;

export const Editar = styled.button`
    background-color: #ffffff;
    color: #000000;
    border-radius: 5px;
    border: 1px solid #000000;
    width: 6em;
    height: 2em;
    margin: 1px;
    cursor: pointer;
`;

export const Eliminar = styled.button`
    background-color: #030303;
    color: white;
    border-radius: 5px;
    border: none;
    width: 6em;
    height: 2em;
    margin: 1px;
    cursor: pointer;
    margin-left: 5px;
`;