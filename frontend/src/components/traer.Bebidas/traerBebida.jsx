import { Pagina, Editar, Background, Receta, Box, H1, Box2, Box3, H2, H2_2, Button, DivPrincipal, Box4, Contendiv, Borrar, ContentImg, Box6, ImgPlato, DivFilas, Box5 } from "./styles.dashboard2"
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import "../../App.css"
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


export const TraerBebidas = () => {
    const Navegate = useNavigate()
    const [bebida, setBebida] = useState([])
    const { token } = useAuthContext()
    const Bebidas = () => {
        Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/bebidas`, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            setBebida(response.data)
        })
            .catch(error => {
            });
    }
    useEffect(() => {
        Bebidas()
    },)
    const eliminarProducto = (id_bebida) => {
        Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/eliminarbebida/${id_bebida}`,{
            headers: {
            Authorization: token
        }  
        })
            .then((response) => {
                Bebidas()
                    ;
            })
            .catch(error => {
            });
    }
    const enviar = () => {
        Navegate("/private/crearBebida")
    }
    return (
        <Pagina>
            <Background>
                <Receta>
                    <Box>
                        <H1>Bebidas</H1>
                        <Box2 onClick={enviar}>
                            <Button >Agregar Bebida</Button>
                        </Box2>
                    </Box>
                    <Box3>
                        <H2>Nombre Bedida</H2>
                        <H2>Imagen</H2>
                        <H2_2>Acciones</H2_2>
                    </Box3>
                    <DivPrincipal >
                        <Box4>
                            {bebida.map((val, index) => (
                                    <Contendiv key={index}>
                                        <DivFilas>
                                            <Box5 >{val.nombre_bebida}</Box5>
                                            <ContentImg>
                                                <ImgPlato src={`${process.env.REACT_APP_PRIMERO_UNO}/` + val.imagen} alt={val.nombre_bebida}></ImgPlato>
                                            </ContentImg>
                                            <Box6>
                                                <Link to={`/private/actualizarBebida/${val.id_bebida}`}>
                                                    <Editar>Editar</Editar>
                                                </Link>
                                                <Borrar onClick={() => eliminarProducto(val.id_bebida)}>Eliminar</Borrar>
                                            </Box6>
                                        </DivFilas>
                                    </Contendiv>
                                ))
                            }
                        </Box4>
                    </DivPrincipal>
                </Receta>
            </Background>
        </Pagina>
    )
}