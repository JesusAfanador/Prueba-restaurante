import styled from "styled-components";

export const Fondo = styled.div`
    font-family: var(--tipo-letra);
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
`;

export const Salir = styled.div`
    height: 5em;
    width: 30em;
    display: flex;
    justify-content: end;
`;

export const Salida = styled.button`
    background-size: cover;
    background-position: center;
    margin-bottom: 50em;
    border: none;
    border-radius: 2em;
    height: 4em;
    width: 4em;
    margin: 1em;
    color: #ffffff6a;
    background-color: #ff0000;
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

export const H1 = styled.h1`
    margin: 0;
`;

export const Form = styled.div`
    height: 19em;
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
    justify-content: space-around; 
`;

export const Div = styled.button`
    border: none;
    width: 130px;
    height: 3em;
    background-color: var(--color-azul);
    border-radius: 5px;
    cursor: pointer;
    font-size:18px;
    color: white;
`;

export const InforImg = styled.input`
    border: none;
`;

export const SpanImg = styled.span`
`;

export const LabelImg = styled.label`
    border: none;
    width: 130px;
    height: 3em;
    background-color: var(--color-azul);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size:18px;
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
    @media  screen and (max-height: 600px ) {
        height: 210px;
        width: 150px;
    }
`;

export const ImgPlato = styled.img`
    height: 180px;
    width: 160px;
    margin-right: 15px;
    position: relative;
    left: 3%;
    top: 1%;
    @media  screen and (max-height: 600px ) {
        height: 100px;
        width: 95px;
        left: 4%;
    }
`;

export const Nota = styled.div`
`;