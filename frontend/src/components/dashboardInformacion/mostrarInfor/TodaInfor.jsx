import React, {useState, useEffect} from "react";
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { Container, Contendiv, DivFilas, InforTodo, Box4, SubContainer, Box, H1, Box2, Button, Box3, H2, Borrar, Editar, ContentImg , Box5 } from "./TodaStyle";


const ActualizaInfor = () => {
  const Navegate = useNavigate()
  const [informacion, setInformacion] = useState([]);
  const {token} = useAuthContext()

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/informacion`,{
      headers: {
        Authorization: token
    } 
    })
      .then((response) => {
        setInformacion(response.data);
      })
      .catch(error => {
      });
  }, []);

  const eliminarProducto = (id_plato) => {
    Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/eliminaInfor/${id_plato}`)
        .then((response) => {
          window.location.reload()
        ;
        })
        .catch(error => {
        console.error("Error al eliminar el producto:", error);
    });
  }

const enviar = () => {
  Navegate("/private/crearInfor")
}

  return (
    <Container>
      <SubContainer>
        <Box>
          <H1>Toda la Informacion</H1>
          <Box2 onClick={enviar}>
            <Button>Crear Informacion</Button>
          </Box2>
        </Box>
        <Box3>
          <H2>Titulo</H2>
          <H2>Imagen</H2>
          <H2>Acciones</H2>
        </Box3>        
        <InforTodo>
          <Box4>
            {informacion.map((infor, index) => (
              <Contendiv key={index}>
                <DivFilas>
                  <H2>{infor.Titulo}</H2>
                  <ContentImg style={{
                    backgroundImage: `url(${process.env.REACT_APP_PRIMERO_UNO}/${infor.imagen})`}}> 
                  </ContentImg>
                  <Box5>
                    <Link to={`/private/actualizate/${infor.id_informacion}`}>
                      <Editar>Editar</Editar>
                    </Link>
                    <Borrar onClick={() => eliminarProducto(infor.id_informacion)}>Eliminar</Borrar>
                  </Box5>
                </DivFilas>
              </Contendiv>
            ))}
          </Box4>
        </InforTodo>        
      </SubContainer>
    </Container>
  )
}

export default ActualizaInfor