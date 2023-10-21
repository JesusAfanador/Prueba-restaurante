import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Input, Textarea, Actualizar, Cancelar, Eliminar, Editar, Label, Cajatabla, Table, Th, Td, Contenedor, Tr } from './styled';
import Swal from "sweetalert2"
import { Fade } from "react-awesome-reveal";
import { useAuthContext } from "../context/AuthContext"

export const Inventario = () => {
    const { token } = useAuthContext();
    const [nombre, setNombre] = useState('');
    const [presentacion, setPresentacion] = useState('');
    const [unidad, setUnidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [platos, setPlatos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [id, setId] = useState();
    const guardar = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_PRIMERO_UNO}/api/productos`, {
            nombre: nombre,
            presentacion: presentacion,
            unidad: unidad,
            precio: precio,
        }).then(() => {
            getProductos()
            limpiarCampos()
            Swal.fire({
                title: "<strong>Exitoo!!</strong>",
                html: "<i>Se ha creado un nuevo producto</i>",
                icon: 'success',
                timer: 1000,
            })
        }).catch(error => {
            if (error.response.status === 404) {
                Swal.fire({
                    title: "<strong>Error</strong>",
                    html: "<i>Algo salio mal</i>",
                    icon: 'error',
                    timer: 1000,
                });
            } else {
                Swal.fire({
                    title: "<strong>Error al crear</strong>",
                    html: "<i>Parece que no se han llenado todos los campos</i>",
                    icon: 'error',
                    timer: 2000
                });
            }
        });
    }

    const getProductos = () => {
        axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/producto`, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            setPlatos(response.data);

        });
    }
    useEffect(() => {
        getProductos();
    }, []);

    //aqui traigo la ruta para actualizar los platos 
    const actualizarProducto = () => {

        axios.put(`${process.env.REACT_APP_PRIMERO_UNO}/api/actualiza-p/${id}`, {
            nombre: nombre,
            presentacion: presentacion,
            unidad: unidad,
            precio: precio,
            id: id,
        }).then(() => {
            getProductos();
            limpiarCampos();
            Swal.fire({
                title: "<strong>Actualizado!!!</strong>",
                html: "<i>Se actualizó el plato!!</i>",
                icon: 'success',
                timer: 1000,
            });
        }).catch((error) => {
            if (error.response) {
                // Error de respuesta del servidor
                console.error("Error de respuesta del servidor:", error.response);
                if (error.response.status === 404) {
                    Swal.fire({
                        title: "<strong>Error</strong>",
                        html: "<i>Producto no encontrado</i>",
                        icon: 'error',
                        timer: 1000,
                    });
                } else {
                    Swal.fire({
                        title: "<strong>Error al actualizar</strong>",
                        html: "<i>Parece que algo salió mal</i>",
                        icon: 'error',
                        timer: 2000
                    });
                }
            } else if (error.request) {
                console.error("Error de solicitud:", error.request);
                Swal.fire({
                    title: "<strong>Error de solicitud</strong>",
                    html: "<i>No se pudo conectar con el servidor</i>",
                    icon: 'error',
                    timer: 2000
                });
            } else {
                console.error("Error:", error.message);
                Swal.fire({
                    title: "<strong>Error</strong>",
                    html: "<i>Algo salió mal</i>",
                    icon: 'error',
                    timer: 2000
                });
            }
        });
    }
    // función de eliminar productos
    const borrarProductos = (val) => {
        Swal.fire({
            title: 'Confirmar eliminacion?',
            html: "<i>Realmente quieres eliminar el producto?</i>",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/elimina-p/${val.id_producto}`).then(() => {
                    getProductos()
                    limpiarCampos()
                    Swal.fire({
                        icon: 'success',
                        title: 'Eliminado!',
                        html: 'Se elimino tu producto',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }).catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No se pudo eliminar!',
                    })
                })
            }
        })
    }
    //aqui limpio los campos cuando le de actualizar
    const limpiarCampos = () => {
        setNombre('');
        setPresentacion('');
        setUnidad('');
        setPrecio('');
        setEditar(false);
    }
    //defino una funcion para editar cada plato
    const editarProducto = (val) => {
        setEditar(true);
        setId(val.id_producto);
        setNombre(val.nombre)
        setPresentacion(val.presentacion);
        setUnidad(val.unidad);
        setPrecio(val.precio);
    }

    const handlePrecioChange = (event) => {
        const inputValue = event.target.value;
        const longitudMaxima = 12;
        if (inputValue.length <= longitudMaxima) {
            setPrecio(inputValue);
        }
    };

    const handleUnidadChange = (event) => {
        const inputValue = event.target.value;
        const longitudMaxima = 12;
        if (inputValue.length <= longitudMaxima) {
            setUnidad(inputValue)
        }
    };

    const handleKey = (event) => {
        let tecla = event.key
        if(['e','.',',','-','+'].includes(tecla)) {
            event.preventDefault();
        }
    }

    return (
        <>
            <Contenedor>
                <Form onSubmit={guardar}>
                    {editar ? (
                        <>
                            <Label>
                                <Fade style={{ fontFeatureSettings: 'Courier New, Courier, monospace', color: 'white', textShadow: '1px 1px 1px black', fontSize: '20px' }}>Nombre producto:</Fade>
                                <Input
                                    type="text"
                                    value={nombre}
                                    maxLength={20}
                                    name="nombre"
                                    autoComplete='off'
                                    placeholder='Crea un nombre unico..'
                                    className='form-control'
                                    onChange={e => setNombre(e.target.value)}/>
                            </Label>
                            <Label>
                            <Fade style={{ fontFeatureSettings: 'Courier New, Courier, monospace', color: 'white', textShadow: '1px 1px 1px black', fontSize: '25px' }}>presentacion:</Fade>
                                <Textarea
                                    type="text"
                                    cols={1}
                                    rows={1}
                                    name="presentacion"
                                    maxLength={20}
                                    value={presentacion}
                                    autoComplete='off'
                                    placeholder='Añade los presentacion'
                                    className="form-control"
                                    onChange={e => setPresentacion(e.target.value)}/>
                            </Label>
                            <Label>
                                <Fade style={{ fontFeatureSettings: 'Courier New, Courier, monospace', color: 'white', textShadow: '1px 1px 1px black', fontSize: '20px' }}>unidad:</Fade>
                                <Input
                                    type="number"
                                    min={1}
                                    name="unidad"
                                    value={unidad}
                                    onKeyDown={handleKey}
                                    placeholder='Que unidad tiene?'
                                    className="form-control"
                                    accept="unidad/*"
                                    onChange={handleUnidadChange}
                                    required/>
                            </Label>
                            <Label>
                                <Fade style={{ fontFeatureSettings: 'Courier New, Courier, monospace', color: 'white', textShadow: '1px 1px 1px black', fontSize: '20px' }}>
                                    precio producto:
                                </Fade>
                                <Input
                                    type="number"
                                    value={precio}
                                    min={1}
                                    onKeyDown={handleKey}
                                    name="precio"
                                    className="form-control"
                                    placeholder='Que precio tiene?'
                                    onChange={handlePrecioChange}/>
                            </Label>
                        </>
                        ) : (
                        <>
                            <Label>
                                <Fade style={{ fontFeatureSettings: 'Courier New, Courier, monospace', color: 'white', textShadow: '1px 1px 1px black', fontSize: '25px' }}>Nombre producto:</Fade>
                                <Input
                                    type="text"
                                    value={nombre}
                                    maxLength={20}
                                    name="nombre"
                                    autoComplete='off'
                                    placeholder='Crea un nombre unico..'
                                    className='form-control'
                                    onChange={e => setNombre(e.target.value)}/>
                            </Label>
                            <Label>
                                <Fade style={{ fontFeatureSettings: 'Courier New, Courier, monospace', color: 'white', textShadow: '1px 1px 1px black', fontSize: '25px' }}>presentacion:</Fade>
                                <Textarea
                                    type="text"
                                    cols={1}
                                    rows={1}
                                    name="presentacion"
                                    maxLength={20}
                                    value={presentacion}
                                    autoComplete='off'
                                    placeholder='Añade los presentacion'
                                    className="form-control"
                                    onChange={e => setPresentacion(e.target.value)}/>
                                <Fade style={{ fontFeatureSettings: 'Courier New, Courier, monospace', color: 'white', textShadow: '1px 1px 1px black', fontSize: '25px' }}>unidad:</Fade>
                                <Input
                                    type="number"
                                    min={1}
                                    name="unidad"
                                    value={unidad}
                                    onKeyDown={handleKey}
                                    placeholder='Que unidad tiene?'
                                    className="form-control"
                                    accept="unidad/*"
                                    onChange={handleUnidadChange}
                                    required/>
                            </Label>
                            <Label>
                                <Fade style={{ fontFeatureSettings: 'Courier New, Courier, monospace', color: 'white', textShadow: '1px 1px 1px black', fontSize: '25px' }}>
                                    precio producto:
                                </Fade>
                                <Input
                                    type="number"
                                    value={precio}
                                    min={1}
                                    onKeyDown={handleKey}
                                    name="precio"
                                    autoComplete='off'
                                    className="form-control"
                                    placeholder='Que precio tiene?'
                                    onChange={handlePrecioChange}/>
                            </Label>
                        </>
                    )
                    }
                    {editar ? (
                        <div>
                            <Actualizar type="button" className="btn btn-warning m-2" onClick={actualizarProducto}>
                                Actualizar
                            </Actualizar>
                            <Cancelar type="button" className="btn btn-info m-2" onClick={limpiarCampos}>
                                Cancelar
                            </Cancelar>
                        </div>
                    ) : (
                        <Button type="submit">Crear producto</Button>
                    )}
                </Form>
                <Cajatabla>
                    <Table className="table table-striped">
                        <thead>
                            <Tr>
                                <Th>nombre</Th>
                                <Th>presentacion</Th>
                                <Th>unidad</Th>
                                <Th>precio</Th>
                                <Th>Acciones</Th>
                            </Tr>
                        </thead>
                        <tbody>
                            {platos.map((val) => {
                                return (
                                    <tr key={val.id_producto} style={{ backgroundColor: val.id_producto % 2 === 0 ? 'silver' : 'white' }}>
                                        <Td>{val.nombre}</Td>
                                        <Td>{val.presentacion}</Td>
                                        <Td>{val.unidad}</Td>
                                        <Td>${val.precio}</Td>
                                        <Td>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <Editar
                                                    type="button"
                                                    onClick={() => {
                                                        editarProducto(val, id);
                                                    }}
                                                    className="btn btn-info">
                                                    Editar
                                                </Editar>
                                                <Eliminar
                                                    type="button"
                                                    onClick={() => { borrarProductos(val) }}
                                                    className="btn btn-danger">
                                                    Eliminar
                                                </Eliminar>
                                            </div>
                                        </Td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Cajatabla>
            </Contenedor>
        </>
    );
}

export default Inventario;