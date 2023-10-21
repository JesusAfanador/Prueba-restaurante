import { Pagina, Background, Receta, H1, Hoja1, Hoja2, ConInfor, Box, Infor, InforImg, Name, Entrar, Div, SpanImg, LabelImg, ContentImg, Box2, ImgPlato, Nota, DivPrincipal} from "./styles.dashboard2"
import React, { useState } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const DashboardBebida = () => {
    const navigate = useNavigate()
    const {token} = useAuthContext()
    const [selectedImage, setSelectedImage] = useState(null);
    const [nombreBebida, setNombreBebida] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [imgEnv, setImgEnv] = useState("")
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setImgEnv(file);
        }
    };      

const agregarplato = (e) => {
e.preventDefault()

const datos = new FormData();

datos.append("nombre_bebida", nombreBebida)
datos.append("descripcion", descripcion)
datos.append("precio", precio)
datos.append("imagen", imgEnv)

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
    }
    };
    Axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/crearbebida`, datos, config)
    .then(({ data }) => {
    navigate("/private/traerBebida")
    })
    .catch((error) => {
    });
}

    return(
    <Pagina>
        <Background>
            <Receta>
                <H1>Agregar Bebidas</H1>
                <DivPrincipal>
                    <Hoja1>
                        <Div>
                            <Name>Ingrese el nombre de la Bebida:</Name>
                            <Infor
                                type="text"
                                name="nombreBebida"
                                placeholder="nombre de la bebida"
                                autoComplete="off"
                                value={nombreBebida}
                                onChange={ev => setNombreBebida(ev.target.value)}>
                            </Infor>
                        </Div>
                        <Div style={{ alignItems:"start"}}>
                            <Name >Ingrese la Descripción:</Name>
                            <Infor 
                                type="text"
                                name="descripcion"
                                placeholder="Descripción"
                                autoComplete="off"
                                rows="10" 
                                cols="40"
                                value={descripcion}
                                onChange={ev => setDescripcion(ev.target.value)}
                                style={{  height: "80px", borderRadius: "8px" }}>
                            </Infor>
                        </Div>
                        <Div>
                            <Name>Ingrese el precio:</Name>
                            <Infor
                                type="text"
                                name="precio"
                                placeholder="Precio"
                                autoComplete="off"
                                value={precio}
                                onChange={ev => setPrecio(ev.target.value)}>
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
                                <Nota></Nota>
                            </Box>
                                <ContentImg>
                                    {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
                                </ContentImg>
                            <Box2>
                                <Entrar onClick={agregarplato}>Guardar</Entrar>
                            </Box2>
                        </ConInfor>
                    </Hoja2>
                </DivPrincipal>
            </Receta>
        </Background>
    </Pagina>
    )
}