import React from "react";
import Axios from "axios"
import { Container, Fondo, Salir, Salida, Mensaje, Form, ConInfor, Infor, Div } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./boton.css";
import { useAuthContext } from "../context/AuthContext";

const ActualizarContraseña = () => {
const navigate = useNavigate()
const [usuario, setUsuario] = useState("")
const [password, setPassword] = useState("")
const [Confirmpassword, setConfirmPassword] = useState("")
const { id } = useParams();
const {token} = useAuthContext()

const admin = async () => {
    await Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/admin/${id}`,{
        headers: {
        Authorization: token
    } 
})
    .then((response) => {
        setUsuario(response.data.nombre)
    })
    .catch(error =>{
    })
}

const actualizarusuario = (e) => {
e.preventDefault()

Axios.put(`${process.env.REACT_APP_PRIMERO_UNO}/api/actualizarcontrasena/${id}`, {
    nombre: usuario,
    password: password,
    confirmarPassword: Confirmpassword,
},{
    headers: {
    Authorization: token
}  
})
.then(({data})=>{
    alert("usuario Actualizado")
    navigate("/private/traeradmin")
})
.catch(error => {
    if (error.response) {
    if (error.response.status === 409) {
        const errorMessage = error.response.data;
        switch (errorMessage) {
        case 'contraseña requerida.':
            break;
        case 'Nombre de usuario requerido.':
            break;
        default:
            break;
        }
        } else {
        alert("Ocurrió un error en la actualizacion.");
        }
        } else {
        alert("Ocurrió un error en la solicitud.");
        }
});
}

const cierra = () => {
    navigate(`/private/traeradmin`)
}

useEffect(() => {
    admin()
}, [])

return (
<div>
<Fondo>
    <Container>
        <Salir>
            <Salida onClick={cierra}>X</Salida>
        </Salir>
        <Mensaje>
            <h1 style={{margin:"0"}}>
            Actualizar Contraseña
            </h1>
        </Mensaje>
        <Form>
            <ConInfor>
                <Infor type="text"
                    name="usuario"
                    placeholder="Usuario"
                    autoComplete="off"
                    value={usuario}
                    onChange={ev => setUsuario(ev.target.value)}/>
                <Infor type="password"
                    name="contraseña"
                    placeholder="Contraseña"
                    autoComplete="off"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}/>
                <Infor type="password"
                    name="contraseña"
                    placeholder="Confirmar Contraseña"
                    autoComplete="off"
                    value={Confirmpassword}
                    onChange={ev => setConfirmPassword(ev.target.value)}/>
            </ConInfor>
        </Form>     
            <Div onClick={actualizarusuario}>
                ACTUALIZAR
            </Div>
    </Container>
</Fondo>      
</div>

)
}

export default ActualizarContraseña;
