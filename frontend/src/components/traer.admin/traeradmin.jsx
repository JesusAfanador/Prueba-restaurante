import React from "react";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Contenedor, Main, Box, Box2, Tabla, Thead,Editar, Tr, Th, Tbody, Td, Box3, Borrar,Titulo, Button } from "./styles";
import Swal from "sweetalert2"  
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export const ListarAdmin = () => {
    const Navegate = useNavigate()
    const {token} = useAuthContext()
    const [cliente, setCliente] = useState([])
    const clientes = () => {
        Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/admin`,{
            headers: {
            Authorization: token
        } 
    })
        .then((response) => {
            setCliente(response.data)
        })
        .catch(error =>{
        })
    }
    const eliminarAdmin = (id_admin,nombre) => {
        Swal.fire({
            title:'Confirmar Eliminacion?',
            html:`<i>Realmente quieres eliminar a <b>${nombre}</b></i>`,
            icon:'warning',
            iconColor:'#b80909',
            showCancelButton:'true',
            confirmButtonColor:'#0478e4',
            cancelButtonColor:'#f90707',
            confirmButtonText:'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/deleteadmin/${id_admin}`,{
                    headers: {
                        Authorization: token
                    }
                }).then(() => {
                    clientes();
                    Swal.fire({
                        icon:'success',
                        title:'Eliminado',
                        html:`Se ha eliminado a <b>${nombre}</b>`,
                        showConfirmButton:false,
                        timer:2000
                    });
                })
                .catch(function (error) {
                    Swal.fire({
                        icon:'error',
                        title:'opps',
                        text:'No se pudo eliminar'
                    });
                });
            }
        })
    }    
    useEffect(() => {
        clientes()
    },[])
    const enviar = () => {
        Navegate("/private/register")
        }

    return(
        <Contenedor>
            <Main>
                <Box>
                    <Titulo>Listado de usuario</Titulo>
                    <Box2 onClick={enviar}>
                        <Button><PersonAddIcon/> Crear Usuario</Button>
                    </Box2>
                </Box>
                <Tabla>
                    <Thead>
                        <Tr>
                            <Th>NOMBRE USUARIO</Th>
                            <Th>CORREO</Th>
                            <Th>CARGO</Th>
                            <Th>ACCIONES</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cliente.map((val, index)=>(             
                            <Tr  key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : 'silver' }}>
                                <Td>{val.nombre}</Td>
                                <Td>{val.correo}</Td>
                                <Td>{val.cargo}</Td>
                                <Td>
                                    <Box3> 
                                        <Link to={`/private/actualizaradmin/${val.id_admin}`} style={{textDecoration:"none"}}>
                                            <Editar>
                                                <ManageAccountsIcon/> Editar
                                            </Editar>
                                        </Link>
                                        <Borrar onClick={() => eliminarAdmin(val.id_admin, val.nombre)}>
                                            <PersonRemoveIcon/> Borrar 
                                        </Borrar>                                        
                                    </Box3>
                                </Td>
                            </Tr>  
                        ))}
                    </Tbody>
                </Tabla>
            </Main>
        </Contenedor>
    )
};