import styled from "styled-components";

export const Container = styled.div`    
    height: 55vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    overflow-x: scroll;
    &::-webkit-scrollbar-thumb {
    background: #000000; 
    border-radius: 10px;
    border: 1px solid #ffff;
    }
    &::-webkit-scrollbar {
        background: transparent;
        border-radius: 10px;
    }
    @media (max-width: 1600px) {
        width: 1200px;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    @media (max-width: 1210px) {
        width: 900px;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    @media (max-width: 950px) {
        width: 600px;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    @media (max-width: 650px) {
        width: 350px;
        overflow-x: scroll;
        overflow-y: hidden;
    }
`;

export const Salir2 = styled.button`
    background-color: transparent;
    text-align: center;
    font-size: 20px;
    height: 3em;
    width: 3em;
`;

export const Box = styled.button`
    width: 15rem;
    height: 15rem;
    margin: 5px;
    background-color: rgba(15, 15, 15, 0.37);
    box-shadow: -10px 15px 15px 0px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: background-color 0.3s, border-color 0.5s, transform 0.3s; 
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 7em;
    margin-bottom: 2em;
`;

export const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 20px;
    border: 1px solid #ffff;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.5s, transform 0.3s;
    font-style: italic;
    &:hover {
        background-color: #00d;
    }
    @media (max-width: 768px) {
        font-size: 14px; 
        padding: 8px 16px; 
    }
`;
