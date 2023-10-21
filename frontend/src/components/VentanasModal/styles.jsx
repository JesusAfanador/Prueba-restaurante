import styled from "styled-components";
import "../../App.css"

export const Fondo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background-color: var(--color-negro);
    position: absolute;
    z-index: 0;
    height: 33em;
    width: 30em;
    border-radius: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(6px 15px 8px black);
`;

export const Salir = styled.div`
    height: 5em;
    width: 30em;
    display: flex;
    justify-content: end;
`;

export const Salida = styled.button`
    background-color: red;
    background-size: cover;
    background-position: center;
    margin-bottom: 50em;
    border: none;
    border-radius: 2em;
    height: 4em;
    width: 4em;
    margin: 1em;
    color: #ffffff6a;
    &:hover{
        color: white;
    };
`;

export const Mensaje = styled.div`
    height: 4em;
    width: 30em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
`;

export const Form = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 18em;
    width: 30em;
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const ConInfor = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Infor = styled.input`
    width: 23em;
    height: 2em;
    border: 1px solid #ffff;
    background-color: transparent;
    border-radius: 5px;
    color: #ffffff;
    @media screen and ( max-width: 90vh){   
        height: 2em;
        width: 20em; 
}
`;

export const Div = styled.button`
    width: 130px;
    height: 3em;
    color: #ffff;
    background-color: var(--color-azul);
    border: none;
    border-radius: 5px;
    font-size:18px;
    cursor: pointer;
`;