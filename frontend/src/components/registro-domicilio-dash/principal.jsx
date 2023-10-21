import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Background, Box, ContPrincipal, P, P2, InputContainer, Label, Input, Boton, Table, Tbody, Tr1, Tr2, Th, Td, Thead } from "./styled";

const RegistroDomi2 = () => {
    const [facturas, setFacturas] = useState([]);
    const [filtros, setFiltros] = useState({ nombre: null, fecha: null });
    const [totalPrecios, setTotalPrecios] = useState(0);
    const [error, setError] = useState("");

const cargarRegistros = async () => {
    try {
        let url = `${process.env.REACT_APP_PRIMERO_UNO}/api/reg_domi`;
        if (filtros.nombre && filtros.fecha) {
            url = `${process.env.REACT_APP_PRIMERO_UNO}/api/reg_domi/por-nombre-y-fecha/${encodeURIComponent(filtros.nombre)}/${moment(filtros.fecha).format('YYYY-MM-DD')}`;
        } else if (filtros.nombre) {
            url = `${process.env.REACT_APP_PRIMERO_UNO}/api/reg_domi/por-nombre/${encodeURIComponent(filtros.nombre)}`;
        } else if (filtros.fecha) {
            url = `${process.env.REACT_APP_PRIMERO_UNO}/api/reg_domi/por-fecha/${moment(filtros.fecha).format('YYYY-MM-DD')}`;
        }
        const response = await axios.get(url);
        const total = response.data.reduce((accumulator, factura) => {
            return accumulator + parseFloat(factura.precio)
        }, 0)
        setFacturas(response.data)
        setTotalPrecios(total)
    } catch (error) {
        console.error("error al traer registros")
    }
};

useEffect(() => {
    cargarRegistros(); 
}, [filtros]);

const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prevFiltros) => ({
        ...prevFiltros,
        [name]: value
    }));
    setError("");
};

const borrarFiltros = () => {
    setFiltros((prevFiltros) => ({
        ...prevFiltros,
        nombre: null,
        fecha: null,
    }));
};

return (
    <Background>
        <Box>
            <InputContainer>
                <Label style={{color:"black"}}>Nombre: </Label>
                <Input autoComplete="off" type="text" name="nombre" value={filtros.nombre || ""} onChange={handleFiltroChange}></Input>
            </InputContainer>
            <InputContainer>
                <Label style={{color: "black"}}>Fecha: </Label>
                <Input type="date" name="fecha" value={filtros.fecha || ""} onChange={handleFiltroChange}/>
            </InputContainer>
            <InputContainer>
                <Boton onClick={borrarFiltros}>Borrar Filtros</Boton>
            </InputContainer>
        </Box>
        <ContPrincipal>
            <Table>
                <Thead>
                    <Tbody>
                        <Tr1>
                            <Th>Nombre </Th>
                            <Th>Producto</Th>
                            <Th>Cantidad</Th>
                            <Th>Precio</Th>
                            <Th>Dirección</Th>
                            <Th>Fecha</Th>
                        </Tr1>
                    </Tbody>
                </Thead>
            </Table>
            <Table>
                <Tbody>
                    {facturas.map((factura) => (
                        <Tr2 key={factura.ID}>
                            <Td>{factura.nombre_cliente}</Td>
                            <Td>{factura.producto}</Td>
                            <Td style={{ textAlign: "center" }}>{factura.cantidad}</Td>
                            <Td style={{ textAlign: "center" }}> $ {Number(factura.precio).toFixed(0)}</Td>
                            <Td>{factura.direccion}</Td>
                            <Td>{moment(factura.fecha_domi).format('YYYY/MM/DD, HH:mm:ss a')}</Td>
                        </Tr2>
                    ))}
                </Tbody>
            </Table>
            {error && <P2>{error}</P2>}
        </ContPrincipal>
        <P>Total en ventas: ${totalPrecios}</P>
    </Background>
);
};

export default RegistroDomi2;