import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Background, ContPrincipal, H1, ContFactura, Table, Thead, Tr, Th, Tbody, Td, ResPrecios, Box, ContBoton, BotonImprimir } from "./styled";
import mesaFunctions from "../vista-mesa/mesa.services/mesa.services";
import { useDataState } from "../vista-mesa/data.context/data.state.context";
import axios from "axios";
import "../../App.css"

const Imprimir = ({ mesa }) => {
    const navigate = useNavigate()
    const [total, setTotal] = useState(0);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [borrarFactura, setBorrarFactura] = useState(false);
    const { mesaData } = useDataState();
    const mesaSeleccionada = mesa ?? mesaData[0]?.id_mesa;
    useEffect(() => {
        setFilteredReservas(mesaData);
        calculateTotal();
    }, [mesaData]);
    useEffect(() => {
        mesaFunctions.getAllMesa(mesa)
            .then(response => {
                const convertedResponse = response.map(item => ({
                    ...item,
                    cantidad: parseInt(item.cantidad),
                }));
                setFilteredReservas(convertedResponse);
                calculateTotal();
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [mesa]);
    const calculateTotal = () => {
        const pedidosConProductos = mesaData.filter(
            (item) => item.producto && item.precio
        );
        const totalAmount = pedidosConProductos.reduce((accumulator, pedido) => {
            const precio = parseFloat(pedido.precio);
            if (!isNaN(precio)) {
                return accumulator + precio;
            }
            return accumulator;
        }, 0);
        setTotal(totalAmount);
    };
    useEffect(() => {
        if (borrarFactura) {
            axios.delete(`${process.env.REACT_APP_PRIMERO_UNO}/api/orden/${mesaSeleccionada}`)
                .then((deleteOrdenResponse) => {
                    if (deleteOrdenResponse.status === 204) {
                        navigate('/private/todofisica/registro-fact');
                    } else {
                    }
                })
                .catch((deleteError) => {
                });
        }
    }, [borrarFactura]);
    const handlePrintClick = () => {
        window.print();
    };

    return (
        <Background>
            <ContPrincipal>
                <H1>imprimir pedido</H1>
                <ContFactura>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>PRODUCTO</Th>
                                <Th>CANTIDAD</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredReservas.map((pedido, index) => (
                                <Tr key={index}>
                                    <Td>{pedido.producto}</Td>
                                    <Td>{pedido.cantidad}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </ContFactura>
                <ResPrecios>
                    <Box style={{ marginTop: '20px', textAlign: 'right' }}></Box>
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir style={{marginLeft: "20px"}} onClick={() => navigate('/private/todofisica/factura/:di')}>Regresar</BotonImprimir>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir pedido</BotonImprimir>
                </ContBoton>
            </ContPrincipal>
        </Background>
    );
};

export default Imprimir;
