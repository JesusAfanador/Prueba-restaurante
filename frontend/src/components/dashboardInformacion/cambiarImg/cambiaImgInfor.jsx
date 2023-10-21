import React from "react";
import Axios from "axios"
import { Box, Container, Fondo, Salir, Salida, Mensaje, H1, Form, ConInfor, Infor, Div, LabelImg, SpanImg, InforImg, ContentImg, ImgPlato } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useState} from "react";
import { useAuthContext } from "../../context/AuthContext";

const ActualizarImgInfor = () => {
const navigate = useNavigate()
const [selectedImage, setSelectedImage] = useState(null);
const [imgEnv, setImgEnv] = useState("");
const { id } = useParams();
const {token} = useAuthContext()
const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setSelectedImage(URL.createObjectURL(file));
        setImgEnv(file);
    }
};

const actualizarusuario = (e) => {
e.preventDefault()

const datos = new FormData();

datos.append("imagen", imgEnv)

Axios.put(`${process.env.REACT_APP_PRIMERO_UNO}/api/actualizaImgInfor/${id}`, datos, {
    headers: {
    Authorization: token
}  
})
.then(({data})=>{
    alert("informacion Actualizado")
    navigate(`/private/informate`)
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
    navigate(`/private/informate`)
}

return (
<Box>
    <Fondo>
        <Container>
            <Salir>
                <Salida onClick={cierra}>X</Salida>
            </Salir>
                <Mensaje>
                    <H1 style={{margin:"0"}}>
                        Actualizar Imagen
                    </H1>
                </Mensaje>
                <Form>
                    <ConInfor>
                        <LabelImg className="btn btn-warning">
                            <SpanImg>Cargar </SpanImg>
                            <InforImg
                                hidden 
                                type="file"
                                onChange={handleImageChange}>
                            </InforImg>
                        </LabelImg>
                        <ContentImg>
                            {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
                        </ContentImg>
                    </ConInfor>
                </Form>     
                <Div onClick={actualizarusuario}>
                    ACTUALIZAR IMG
                </Div>
        </Container>
    </Fondo>      
</Box>
)
}
export default ActualizarImgInfor;