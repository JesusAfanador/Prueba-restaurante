import styled from "styled-components"
import "../../App.css"

export const Background = styled.div`
  font-family: var(--tipo-letra);
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and ( max-width: 90vh){   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Login = styled.form`
  background-color: var(--color-negro);
  height: 30em;
  width: 30em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and ( max-width: 90vh){
    width: 20em; 
  }
`;

export const ConTitulo = styled.div`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.h1`
  color: #f1f1f1;
  font-size: 25px;
  padding: 2px;
  margin: 0;
  @media screen and ( max-width: 90vh){   
    font-size: 1.3em;
    padding: 7px;
  }
`;

export const ConInfor = styled.div`
  width: 30em;
  height: 15em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and ( max-width: 90vh){   
    height: 70%;
    width: 20em; 
  }
`;

export const Name = styled.h3`
  color: #ffff;
  font-size: 25px;
  @media screen and ( max-width: 90vh){   
    font-size: 0.8em;
  }
`;

export const Infor = styled.input`
  width: 23em;
  height: 2em;
  border: 1px solid #ffff;
  background-color: transparent;
  border-radius: 5px;
  color: #ffffff;
  font-size: 15px;
  @media screen and ( max-width: 90vh){   
    height: 2em;
    width: 20em; 
  }
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

export const Box = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
`;