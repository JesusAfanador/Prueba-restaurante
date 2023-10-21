import { Pagina, H1, Hoja1, Hoja2, ConInfor, Box, Infor, InforImg, Box2, Name, Entrar, Div, LabelImg, ContentImg, ImgPlato, DivPrincipal} from "./style";
import React, { useState } from 'react';
import Axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const CreaInformacion = () => {
    const navigate = useNavigate()
    const {token} = useAuthContext()
    const [titulo, setTitulo] = useState("");
    const [informacion, setInformacion] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagen_url, setImagen_url] = useState("")
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setImagen_url(file);
        }
    };      

const agregarInformacion = (e) => {
    navigate("/private/crearInfor")
e.preventDefault()

const datos = new FormData();

datos.append("titulo", titulo)
datos.append("informacion", informacion)
datos.append("imagen", imagen_url)

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
    }
    };
    Axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/crearInformacion`, datos, config)
    .then(({ data }) => {
    window.location.reload()
    })
    .catch((error) => {
    });
}

return(
    <Pagina>
        <H1>Creacion de Informes</H1>
        <DivPrincipal>
            <Hoja1>
                <Div style={{ height:" 3em"}}>
                    <Name>Informacion para los clientes</Name>
                    <Div style={{width:"17em"}}></Div>
                </Div>
                <Div>
                    <Name>Titulo:</Name>
                    <Infor
                        type="text"
                        name="titulo"
                        placeholder="titulo"
                        autoComplete="off"
                        value={titulo}
                        onChange={ev => setTitulo(ev.target.value)}>
                    </Infor>
                </Div>
                <Div>
                    <Name>Informacion:</Name>
                    <Infor
                        type="text"
                        name="informacion"
                        placeholder="informacion"
                        autoComplete="off"
                        value={informacion}
                        onChange={ev => setInformacion(ev.target.value)}
                        style={{  height: "80px", borderRadius: "8px" }}>
                    </Infor>
                </Div>
            </Hoja1>
            <Hoja2>
                <ConInfor style={{height:"480px"}}>
                    <Box>
                        <LabelImg className="btn btn-warning">
                            <FileUploadIcon style={{fontSize:"80px"}}/>
                            <InforImg
                                hidden 
                                type="file"
                                onChange={handleImageChange}>
                            </InforImg>
                        </LabelImg>
                    </Box>
                        <ContentImg>
                            {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
                        </ContentImg>
                    <Box2>
                        <Entrar onClick={agregarInformacion}>Guardar</Entrar>
                    </Box2>
                </ConInfor>
            </Hoja2>
        </DivPrincipal>
    </Pagina>
    )
}