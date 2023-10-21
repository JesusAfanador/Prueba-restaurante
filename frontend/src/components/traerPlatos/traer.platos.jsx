import { Pagina, Editar, Background, Receta, Box, H1, Box2, Box3, H2, H2_2, Button, DivPrincipal, Box4, Contendiv, Borrar, ContentImg, Box6, ImgPlato, DivFilas, Box5 } from "./styles.dashboard2"
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import "../../App.css"
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


export const TraerPlatos = () => {
    const Navegate = useNavigate()
    const [plato, setPlato] = useState([])
    const { token } = useAuthContext()
    const Platos = () => {
        Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/platos`, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            setPlato(response.data)
        })
            .catch(error => {
            });
    }
    useEffect(() => {
        Platos()
    },)
    const eliminarProducto = (id_plato) => {
        Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/elimina/${id_plato}`,{
            headers: {
            Authorization: token
        }  
        })
            .then((response) => {
                Platos()
                    ;
            })
            .catch(error => {
                console.error("Error al eliminar el producto:", error);
            });
    }
    const enviar = () => {
        Navegate("/private/dashboard")
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
                            {plato.map((val, index) => (
                                    <Contendiv key={index}>
                                        <DivFilas>
                                            <Box5>{val.nombre_plato}</Box5>
                                            <ContentImg>
                                                <ImgPlato src={`${process.env.REACT_APP_PRIMERO_UNO}/` + val.imagen} alt={val.nombre_plato}></ImgPlato>
                                            </ContentImg>
                                            <Box6>
                                                <Link to={`/private/actualizarPlato/${val.id_plato}`}>
                                                    <Editar>Editar</Editar>
                                                </Link>
                                                <Borrar onClick={() => eliminarProducto(val.id_plato)}>Eliminar</Borrar>
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