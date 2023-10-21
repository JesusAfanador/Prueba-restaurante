import { Pagina, Background, Receta, H1, Hoja1, Hoja2, ConInfor, Box, Infor, InforImg, Name, Select, Option, Entrar, Div, LabelImg, ContentImg, Box2, ImgPlato, DivPrincipal } from "./stylesDashboard"
import { Sticker } from "./stylesDashboard";
import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const Dashboard = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [nombrePlato, setNombrePlato] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [imgEnv, setImgEnv] = useState("")
    const [tipoPlato, setTipoPlato] = useState(null)
    const Tipos = ["sancocho", "corriente"]
    const navigate = useNavigate()
    const { token } = useAuthContext();
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setImgEnv(file);
        }
    };
    const handleCargoSeleccionada = (event) => {
        const TipoSelect = event.target.value;
        setTipoPlato(TipoSelect);
    };

    const agregarplato = (e) => {
        e.preventDefault()
        const datos = new FormData();
        datos.append("nombre_plato", nombrePlato)
        datos.append("descripcion", descripcion)
        datos.append("precio", precio)
        datos.append("imagen", imgEnv)
        datos.append("tipo_plato", tipoPlato)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: token
            }
        };
        Axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/crearplato`, datos, config)
            .then(({ data }) => {
                ;
                navigate("/private/traerPlato")
            })
            .catch((error) => {
            });
    }

    //esta es la funcion para evitar que se introduzca la e o cualquier letra
    const notLetters = (event) => {
        if (event.key === 'e' || event.key === 'E') {
            event.preventDefault()
        }
    }

return (
    <Pagina>
        <Background>
            <Receta>
                <H1 style={{color:"black"}}>Agregar Platos</H1>
                <DivPrincipal>
                    <Hoja1>
                        <Div>
                            <Name>Ingrese el nombre del plato:</Name>
                            <Infor
                                type="text"
                                name="nombrePlato"
                                placeholder="nombre del plato"
                                autoComplete="off"
                                value={nombrePlato}
                                onChange={ev => setNombrePlato(ev.target.value)}>
                            </Infor>
                        </Div>
                        <Div style={{ alignItems: "start" }}>
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
                                style={{ height: "80px",  borderRadius: "8px" }}>
                            </Infor>
                        </Div>
                        <Div>
                            <Name>Ingrese el precio:</Name>
                            <Infor
                                type="number"
                                name="precio"
                                placeholder="Precio"
                                autoComplete="off"
                                value={precio}
                                onKeyDown={notLetters}
                                onChange={ev => setPrecio(ev.target.value)}>
                            </Infor>
                        </Div>
                        <Div>
                            <Name>Ingrese el tipo de plato:</Name>
                            <Select 
                                onChange={handleCargoSeleccionada}>
                                <Option value="">El tipo de Plato</Option>
                                {Tipos.map((tipo, index)=>(
                                    <Option key={index} value={tipo}>{tipo}</Option>
                                ))}
                            </Select>
                        </Div>
                    </Hoja1>
                    <Hoja2>
                        <ConInfor style={{ height: "480px" }}>
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
                            <Box2 style={{ display: "flex" }}>
                                <Entrar onClick={agregarplato}>Guardar</Entrar>
                                <Sticker></Sticker>
                            </Box2>
                        </ConInfor>
                    </Hoja2>
                </DivPrincipal>
            </Receta>
        </Background>
    </Pagina>
    )
}