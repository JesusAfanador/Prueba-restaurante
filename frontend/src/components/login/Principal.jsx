import { useState } from "react";
import Axios from "axios";
import { Background, ConInfor, ConTitulo, Infor, Login, Name, Titulo, Logotipo, Div, A, Span, H4, Form, Fondo1 } from "./styled";
import logo from "../Img/Unido.png"
import {useAuthContext} from "../context/AuthContext"
import CryptoJS from 'crypto-js'

const Logini = () => {
  const [body,setBody] = useState({usuario:'',password:''})
  const {login} = useAuthContext()
  const [password, setPassword] = useState("")
  const [usuario, setUsuario] = useState("")
  const [advertencia, setAdvertencia] = useState("")
  const {x} = useAuthContext()
  const verificar = (e) => {
    e.preventDefault()
    const caracteresSospechosos = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(usuario);    
    if (caracteresSospechosos) {
      setAdvertencia('Los campos contienen caracteres sospechosos.');
      return;
    }
    const hash = CryptoJS.AES.encrypt(password, x).toString();
    Axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/login`,{
      usuario: usuario,
      password: password
    })
    .then(({data})=>{
      login(data)
    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 409) {
          const errorMessage = error.response.data;
          switch (errorMessage) {
            case 'Usuario requerido.':
              setAdvertencia('Usuario requerido.');
              break;
            case 'contraseña requerida.':
              setAdvertencia('contraseña requerida.');
              break;
            case "Las Contraseñas no Coinciden":
              setAdvertencia("Contraseña Incorrecta.");
              break;
            case "El usuario no existe":
                setAdvertencia("El usuario no existe");
              break;
            default:
              setAdvertencia("Error en el login.");
              break;
            }
            } else {
              setAdvertencia("Ocurrió un error en la Autenticación.");
            }
            } else {
            setAdvertencia("Ocurrió un error en la solicitud.");
      }
    });
  }     
  return (
    <>
      <Background>
        <Fondo1>
          <Logotipo src={logo}></Logotipo>
          <Login>
            <ConTitulo>
              <Titulo style={{filter: "drop-shadow(-15px 15px 10px black)"}}>Donde entras por una bandeja y sales con una paisa</Titulo>
            </ConTitulo>
            <Form>
            <ConInfor>
              <Name style={{filter: "drop-shadow(-15px 15px 10px black)"}}>Usuario</Name>
              <Infor
                type="text"
                name="usuario"
                placeholder="Usuario"
                autoComplete="off"
                value={usuario}
                onChange={ev => setUsuario(ev.target.value)}>
              </Infor>
              <Name style={{filter: "drop-shadow(-15px 15px 10px black)"}}>Contraseña</Name>
              <Infor
                type="password"
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                value={password}
                onChange={ev => setPassword(ev.target.value)}>
              </Infor>
            </ConInfor>
            </Form>
            <Div>
              <A onClick={verificar} style={{fontWeight:"bold"}} href="#" className="btn-neon">
                <Span id="span1"></Span>
                <Span id="span2"></Span>
                <Span id="span3"></Span>
                <Span id="span4"></Span>
                INGRESAR
              </A>
            </Div>
              <H4 style={{color: "white", margin:"none"}}>{advertencia}</H4>
          </Login>
        </Fondo1>
      </Background>
    </>
  );
}

export default Logini;