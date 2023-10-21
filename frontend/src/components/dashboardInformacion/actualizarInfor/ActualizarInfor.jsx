import React, {useState, useEffect} from "react";
import Axios  from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { ConInfor, Box2, Span, Container, H1, Box, ContentImg, Box3, Button, DivPrincipal, Hoja1, Hoja2, Infor, Pagina, ImgPlato, Entrar } from "./actualizarStyle";

const ActualizarInformacion = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [titulo, setTitulo] = useState("")
  const [informacion, setInformacion] = useState("")
  const [imgEnv, setImgEnv] = useState("")
  const navigate = useNavigate()
  const { token } = useAuthContext();
  const { id } = useParams();
  const ubicacion = `${process.env.REACT_APP_PRIMERO_UNO}/`
  const BuscarInfor = async () => {
      await Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/selectInformacion/${id}`,{
          headers: {
          Authorization: token
      } 
  })
      .then((response) => {
          
          setTitulo(response.data.Titulo)
          setInformacion(response.data.Informacion)
          setSelectedImage(ubicacion+response.data.imagen)
      })
      .catch(error =>{
      })
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setSelectedImage(URL.createObjectURL(file));
        setImgEnv(file);
    }
};
  const actualiza = (e) => {
    e.preventDefault()
    const datos = {
        titulo,
        informacion,
    }
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token
        }
        };
        Axios.put(`${process.env.REACT_APP_PRIMERO_UNO}/api/inforActualizada/${id}`, {
            titulo: titulo,
            informacion: informacion,
        },{
            headers: {
            Authorization: token
        }  
        })
        .then(({ data }) => {
        navigate("/private/informate")
        })
        .catch(error => {
            if (error.response) {
                if (error.response.status === 409) {
                const errorMessage = error.response.data;
                switch (errorMessage) {
                case 'titulo requerido.':
                  break;
                case 'descripcion requerida.':
                  break;
                case 'Precio Requerido.':
                  break;
                case 'Imagen Requerida':
                  break;
                default:
                break;
                }
                } else {
                alert("Ocurrió un error en el registro.");
                }
                } else {
                alert("Ocurrió un error en la solicitud.");
                }
                });
                }
    useEffect(()=>{
      BuscarInfor()
    },[])

  return (
    <Pagina>
      <Container>
        <H1>Actualizar Informacion</H1>
        <DivPrincipal>
          <Hoja1>
            <Box>
              <Box>Titulo de la informacion</Box>
              <Infor
                type="text"
                name="Titulo"
                placeholder="Titulo"
                autoComplete="off"
                value={titulo}
                onChange={ev => setTitulo(ev.target.value)}>
              </Infor>
            </Box>
            <Box>
              <Box>Informacion relevantes</Box>
              <Infor
                type="text"
                name="informacion"
                placeholder="informacion"
                autoComplete="off"
                rows="10" 
                cols="40"
                value={informacion}
                onChange={ev => setInformacion(ev.target.value)}
                style={{  height: "80px", borderRadius: "8px" }}>
              </Infor>
            </Box>
          </Hoja1>
          <Hoja2>
            <ConInfor>
              <Box2></Box2>
              <Span>Imagen Actual</Span>
              <ContentImg>
                {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
              </ContentImg>
              <Box3>
                <Link to={`/private/actualizarImgInfor/${id}`}>
                  <Button>Cambiar Imagen</Button>
                </Link>
                <Entrar onClick={actualiza}> Guardar</Entrar>
              </Box3>
            </ConInfor>
          </Hoja2>
        </DivPrincipal>
      </Container>
    </Pagina>
  )
}

export default ActualizarInformacion