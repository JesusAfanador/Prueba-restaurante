import { Pagina, Background, Receta, H1, Hoja1, Hoja2, ConInfor, P, Infor, Name, Entrar, Div, ContentImg, Box, Button, ImgPlato, DivPrincipal} from "./styles.dashboard2"
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const ActualizarPlato = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [nombrePlato, setNombrePlato] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [imgEnv, setImgEnv] = useState("")
    const [tipoPlato, setTipoPlato] = useState("")
    const navigate = useNavigate()
    const { token } = useAuthContext();
    const { id } = useParams();
    const ubicacion = `${process.env.REACT_APP_PRIMERO_UNO}/`
    const BuscarPlato = async () => {
        await Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/plato/${id}`,{
            headers: {
            Authorization: token
        } 
    })
        .then((response) => {
            
            setNombrePlato(response.data.nombre_plato)
            setDescripcion(response.data.descripcion)
            setPrecio(response.data.precio)
            setSelectedImage(ubicacion+response.data.imagen)
            setTipoPlato(response.data.tipo_plato)
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

const agregarplato = (e) => {
e.preventDefault()

const datos = {
    nombrePlato,
    descripcion,
    precio,
    tipoPlato
}

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
    }
    };
    Axios.put(`${process.env.REACT_APP_PRIMERO_UNO}/api/actualiza/${id}`, {
        nombre_plato: nombrePlato,
        descripcion: descripcion,
        precio: precio,
        tipo_plato: tipoPlato
    },{
        headers: {
        Authorization: token
    }  
    })
    .then(({ data }) => {
    navigate("/private/traerPlato")
    })
    .catch(error => {
        if (error.response) {
            if (error.response.status === 409) {
            const errorMessage = error.response.data;
            switch (errorMessage) {
            case 'Nombre del Plato requerido.':
                break;
            case 'descripcion requerida.':
                break;
            case 'Precio Requerido.':
                break;
            case 'Imagen Requerida':
                break;
            case 'Tipo de plato  requerido.':
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
    BuscarPlato()
},[])


const handleKey = (event) => {
    let tecla = event.key
    if (['e',',','.','-','+','*'].includes(tecla)) {
        event.preventDefault();
    }
}

const longitudInput = (event)=> {
    const inputValue = event.target.value
    const longitudMaxima = 15
    if (inputValue.length <= longitudMaxima) {
        setPrecio(inputValue)
    }
}

return(
    <Pagina>
        <Background>
            <Receta>
                <H1 style={{color:"white"}}>Actualizar Platos</H1>
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
                                type="number"
                                min={1}
                                onKeyDown={handleKey}
                                name="precio"
                                placeholder="Precio"
                                autoComplete="off"
                                value={precio}
                                onChange={longitudInput}>
                            </Infor>
                        </Div>   
                    </Hoja1>
                    <Hoja2>
                        <ConInfor>
                            <P>Imagen Actual</P>
                            <ContentImg> 
                                {selectedImage && <ImgPlato src={selectedImage} alt="Seleccionada" />}
                            </ContentImg>
                            <Box>                               
                                <Link to={`/private/actualizarImgPlato/${id}`}>
                                    <Button>Cambiar Imagen</Button>
                                </Link>
                                <Entrar onClick={agregarplato}>Guardar</Entrar>
                            </Box>
                        </ConInfor>
                    </Hoja2>
                </DivPrincipal>
            </Receta>
        </Background>
    </Pagina>
    )
}