import { useEffect, useState } from "react";
import Axios from "axios"
import { Background, ConInfor, ConTitulo, Entrar, Infor, Login,  Name, Titulo, Box } from "./Styled";
import { useNavigate, useParams} from  "react-router-dom"
import { useAuthContext } from "../context/AuthContext";
import ActualizarContraseña from "../VentanasModal/ActualizarContraseña";

const ActualizarUser = () => {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState("")
    const [correo, setCorreo] = useState("")
    const { token } = useAuthContext();
    const { id } = useParams();
    const [cliente, setCliente] = useState([])
    const [activo, setActivo] = useState(false)
    const [ver, setVer] = useState("password")
    const clientes = async () => {
    await Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/admin/${id}`,{
        headers: {
        Authorization: token
    } 
})
    .then((response) => {
        setCliente(response.data)
        setUsuario(response.data.nombre)
        setCorreo(response.data.correo)
    })
    .catch(error =>{
    })
}
const cambiarStado = (e) =>{
  e.preventDefault()
  setActivo(true)
}
useEffect(() => {
    clientes()
},[])

const actualizarusuario = (e) => {
  e.preventDefault()
  Axios.put(`${process.env.REACT_APP_PRIMERO_UNO}/api/admin/${id}`, {
    nombre: usuario,
    correo: correo,
},{
  headers: {
    Authorization: token
}  
})
.then(({data})=>{
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
          case 'Correo requerido.':
            break;
          case 'Nombre de usuario o correo ya existente.':
            break;
          case 'Las contraseñas deben coincidir.':
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
  const verContraseña = () => {
    setVer("text")
  }
  const actualizarContraseña = () => {
    navigate(`/private/actualizarContraseña/${id}`)
  }

  return (
  <>
    {activo && <ActualizarContraseña />}
      <Background>
        <Login>
          <ConTitulo>
            <Titulo>Actualizar Usuario</Titulo>
          </ConTitulo>
          <ConInfor>
            <Name>Usuario</Name>
            <Infor
              type="text"
              name="usuario"
              placeholder="Usuario"
              autoComplete="off"
              value={usuario}
              onChange={ev => setUsuario(ev.target.value)}>
            </Infor>
            <Name>Correo</Name>
            <Infor
              type="email"
              name="correo"
              placeholder="Correo"
              autoComplete="off"
              value={correo}
              onChange={ev => setCorreo(ev.target.value)}>
            </Infor>
          </ConInfor>
          <Box>
            <Entrar onClick={actualizarContraseña}>Actualizar Contraseña</Entrar>
            <Entrar onClick={actualizarusuario}>Actualizar</Entrar>
          </Box>
        </Login>
      </Background>
  </>
  );
}

export default ActualizarUser;