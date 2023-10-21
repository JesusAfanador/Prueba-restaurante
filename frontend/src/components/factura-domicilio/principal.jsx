import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Background, ContPrincipal, H1, ContFactura,  Table, Thead, Tr, Th, Tbody, Td, ResPrecios, Box, P, ContBoton, BotonImprimir } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const FacturaDomicilio = () => {
    const Navegate = useNavigate()
    const [total, setTotal] = useState(0);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [nombre, setNombre] = useState()
    const calculateTotal = (platos) => {
        const pedidosConProductos = platos.filter(item => item.nombre_plato && item.cantidad && item.precio);
        setNombre(pedidosConProductos[0].nombre_cliente)
        const subtotalAmount = pedidosConProductos.reduce((accumulator, pedido) => {
            const pedidoTotal = parseFloat(pedido.precio);
            return accumulator + pedidoTotal;
        }, 0);
        const totalAmount = subtotalAmount
        setTotal(totalAmount);
    };
    const Delete = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro);
        Axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/quitar/${parametroCodificado}`)
        .catch(error => {
        })
    }
    const handlePrintClick = () => {
        window.print();
    };

    const Domicilios = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro); 
        Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/domicilio/${parametroCodificado}`).then((response) => {
            setFilteredReservas(response.data)
            calculateTotal(response.data)
            
        })
            .catch(error => {
            })
    }
    useEffect(() => {
        Domicilios()
    }, [])

    const envia = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro);
        Navegate(`/private/todofisica/imprimirdomicilio/${parametroCodificado}`)
    }
    const { di } = useParams();
    const enviarDatosARegistrosDomicilio = async () => {
        const dataDomicilio = {
            table: "domicilio",
            rows: filteredReservas,
        };
        const dataRegistrosDomicilio = dataDomicilio.rows.map((domicilio) => {
            return {
                nombre_cliente: domicilio.nombre_cliente,
                producto: domicilio.nombre_plato,
                cantidad: domicilio.cantidad,
                precio: domicilio.precio,
                direccion: domicilio.direccion,
                fecha_domi: fechaActual,
            };
        });
        try {
            const responseRegistrosDomicilio = await Axios.post(
                `${process.env.REACT_APP_PRIMERO_UNO}/api/reg_domi`,
                { table: "registros_domicilio", rows: dataRegistrosDomicilio }
            );
            if (responseRegistrosDomicilio.status === 200) {
                Navegate(`/private/todofisica/registrosdomi`);
            } else {
                console.error("Error al agregar datos de domicilio a registros_domicilio.");
            }
        } catch (error) {
            console.error("Error al comunicarse con el servidor:", error);
        }
    };
    const fechaActual = moment().format('YYYY-MM-DD HH:mm:ss'); 

    return (
        <Background>
            <ContPrincipal>
                <H1>Factura Domicilio </H1>
                <ContFactura>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>PRODUCTO</Th>
                                <Th>CANTIDAD</Th>
                                <Th>PRECIO</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredReservas.map((pedido, index) => (
                                <Tr key={index}>
                                    <Td>{pedido.nombre_plato}</Td>
                                    <Td>{pedido.cantidad}</Td>
                                    <Td>{pedido.precio}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </ContFactura>
                <ResPrecios>
                    <Box>
                        <P>Cliente:{nombre}</P>
                        <P>Total:${total}</P>
                    </Box>
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir factura</BotonImprimir>
                    <BotonImprimir onClick={envia}>Imprimir pedido </BotonImprimir>
                    <Link to="/private/todofisica/fisica">
                        <BotonImprimir onClick={Delete}>Eliminar Factura</BotonImprimir>                                
                    </Link>
                    <BotonImprimir onClick={enviarDatosARegistrosDomicilio}>
                        Ir a Registro de Domicilio
                    </BotonImprimir>
                    <Link to="/private/todofisica/selectfactura">
                        <BotonImprimir style={{width:"5rem",height:"2rem"}}>regresar</BotonImprimir>
                    </Link>
                </ContBoton>
            </ContPrincipal>    
        </Background>
    );
};

export default FacturaDomicilio;