import { Pagina, H1, Hoja1, Hoja2, ConInfor, Box, Infor, InforImg, Name, Entrar, Div, LabelImg, ContentImg, Box2, ImgPlato,  DivPrincipal, Eliminar} from "./style";
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const CreaMesas = () => {
    const {token} = useAuthContext()
    const [mesas, setMesas] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [numeroMesa, setNumeroMesa] = useState([])
    const [imagen_url, setImagen_url] = useState("")
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setImagen_url(file);
        }
    };      

const agregarplato = (e) => {
e.preventDefault()

const datos = new FormData();

datos.append("numeroMesa", numeroMesa)
datos.append("imagen", imagen_url)

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
    }
    };
    Axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/creare`, datos, config)
    .then(({ data }) => {
    window.location.reload()
    })
    .catch((error) => {
    });
}

const getMesas = () => {
    Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/mesas`).then((response) => {
    setMesas(response.data.length);
    setNumeroMesa(response.data.length + 1)
    });
};

useEffect(() => {
    getMesas();
}, []);

const eliminar = () => {
    Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/eliminar-mesa/${mesas}`)
    .catch(error => {
    })
    window.location.reload()
}

return(
    <Pagina>
        <H1 style={{color:"black"}}>Creacion de Mesas</H1>
        <DivPrincipal>
            <Hoja1>
                <Div style={{ height:" 3em"}}>
                    <Name>Numero total de mesas: {mesas}</Name>
                    <Div style={{width:"17em"}}></Div>
                </Div>
                <Div>
                    <Name>Ingrese el numero de la mesa siguiente:</Name>
                    <Infor
                        type="text"
                        name="numeroMesa"
                        placeholder="numero de la mesa"
                        autoComplete="off"
                        value={numeroMesa}
                        onChange={ev => setNumeroMesa(ev.target.value)}>
                    </Infor>
                </Div>
                <Div style={{ height:" 3em"}}>
                    <Eliminar onClick={eliminar}>Elimina mesa</Eliminar>
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
                    <Box2 style={{display: "flex"}}>
                        <Entrar onClick={agregarplato}>Guardar</Entrar>
                    </Box2>
                </ConInfor>
            </Hoja2>
        </DivPrincipal>
    </Pagina>
    )
}