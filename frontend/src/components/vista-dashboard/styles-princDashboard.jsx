import styled from "styled-components"
import "../../App.css"

export const Body = styled.div`
    font-family: var(--tipo-letra);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    @media  screen and (min-width: 1000px ) {
        overflow: auto;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    border-radius: 5px;
    display: grid;
    gap: 15px;
    position: relative;
    right: 5%;
    grid-template:
        "header" 100px
        "navbar1" 50px
        "main1" 135vh
        "sidebar1" 400px;
    @media  screen and (max-height: 450px ) {
        right: auto;
        width: 97%;
        grid-template:
            "header" 100px
            "navbar1" 50px
            "main1" 155vh
            "sidebar1" 400px        
            200px auto
    }
    @media  screen and (min-width: 600px ) {
        right: auto;
        width: 100%;
        grid-template:
            "header" 100px
            "navbar1" 50px
            "main1" 145vh
            "sidebar1" 180px        
            200px auto;
            transition: 1s ease
    }
    @media  screen and (min-width: 700px ) {
        width: 100%;
        right: 2%;
        grid-template:
            "header header" 100px
            "navbar1 navbar1" 50px
            "sidebar1 main1" auto
            /
            200px auto;
            transition: 1s ease
    }
    @media  screen and (min-width: 1000px ) {
        width: 100%;
        right: auto;
        grid-template:
            "header  header header"   100px
            "navbar1 main1    sidebar1" auto
            /
            220px     auto       220px;
            transition-duration: 1s ease
    }
`;

export const Header = styled.div`
    width: 95%;
    height: 80%;
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
`;

export const ContainerHeader = styled.div`
    background-color: var(--color-negro);
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
    box-shadow: var(--color-amarillo);
    color: var(--color-blanco);
    grid-area: header;
`;

export const CajaNav = styled.div`
    background-color: var(--color-negro);
    box-shadow: var(--color-amarillo);
    display: flex;
    grid-area: navbar1;
    border-radius: 5px;
    @media  screen and (min-width: 1000px ) {
        flex-direction: column;
        font-size: 13px;
    }
`;

export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: main1;
    border-radius: 5px;
    overflow: scroll;
    &::-webkit-scrollbar-thumb {
        background: var(--color-blanco); 
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
`;

export const ContainerMenu = styled.div`
    background-color: var(--color-negro);
    grid-area: sidebar1;
    box-shadow: var(--color-amarillo);
    color: var(--color-blanco);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    &::-webkit-scrollbar-thumb {
        background: var(--color-blanco); 
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
`;

export const CajaLogo = styled.div`
    height: 40px;
    width: 40rem;
    display: flex;
    align-items: center;
`;

export const Boton = styled.button`
    height: 100%;
    width:100px;
    margin-top: 10px;
    color: var(--color-blanco);
    text-decoration: none;
    border-radius: 8px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    @media  screen and (min-width: 1000px ) {
        height: 50px;
        width:100%;
        text-decoration: none;
        border: none;
        background-color: transparent;
        text-align: start;
        font-size: 19px;
        font-weight: bold;
        cursor: pointer
    }
`;

export const CerrarSesion = styled.button`
    height: 50px;
    font-size: 20px;
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 22px;
`;

export const Icon = styled.div`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: red;
    }
`;

