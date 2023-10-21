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

export const H1 = styled.h1`
    color: black;
`;

export const Hoja1 = styled.form`
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Hoja2 = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media  screen and (min-width: 1250px ) {
        height: 50%;
    }
`;

export const ConInfor = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff94;
`;

export const Box = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Div = styled.div`
`;

export const Name = styled.div`
    color: white;
    font-size: 20px;
`;

export const Infor = styled.input`
    background-color: transparent;
    border:1px solid #ffff;
    color: white;
    border-radius: 8px;
    height: 40px;
    width: 20em;
`;

export const Infor2 = styled.input`
`;

export const Entrar = styled.button`
    border: none;
    width: 130px;
    height: 3em;
    background-color: var(--color-azul);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size:18px;
`;

export const InforImg = styled.input`
    border: none;
`;

export const SpanImg = styled.span`
`;

export const LabelImg = styled.label`
    height: 80px;
    width: 85px;
    border-radius: 40%;
    cursor: pointer;
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

export const Box2 = styled.div`
    display: flex;
`;

export const ImgPlato = styled.img`
    height: 180px;
    width: 160px;
    margin-right: 15px;
    transform: rotate(-3deg);
    position: relative;
    left: 3%;
    top: -2%;
    @media  screen and (max-height: 600px ) {
        height: 100px;
        width: 95px;
        left: 4%;
    }
`;

export const Nota = styled.div`
`;

export const Sticker = styled.div`
`;

export const Sticker2 = styled.div`
`;

export const DivPrincipal = styled.div`
    height: 90%;
    width: 90%;
    background-color: var(--color-negro);
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    border-radius: 8px ;
    position: relative;
    @media  screen and (max-width: 670px ) {
        height: 120%
    }
    @media  screen and (min-width: 1020px ) {
        flex-direction: row;
        justify-content: center;
        height: 60%;
        width: 80%;
    }
    @media  screen and (max-height: 450px ) {
        height: 200%;
        box-shadow: none;
    }
`;