import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Background, H1, ContPrincipal, ContFactura, Table, Thead, Tr, Th, Tbody, Td, ResPrecios, ContBoton, BotonImprimir } from "./styled";
import { useNavigate } from "react-router-dom";

const ImprimirDomicilio = () => {
    const Navegate = useNavigate()
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [nombre, setNombre] = useState()
    const calculateTotal = (platos) => {
        const pedidosConProductos = platos.filter(item => item.nombre_plato && item.cantidad);
        setNombre(pedidosConProductos[0].nombre_cliente)
    };
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
    const regresa = () => {
        const parametro = di;
        const parametroCodificado = encodeURIComponent(parametro); 
        Navegate(`/private/todofisica/facturadomicilio/${parametroCodificado}`)
    }
    const { di } = useParams();

    return (
        <Background>
            <ContPrincipal>
                <H1>Imprimir Domicilio </H1>
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
                                    <Td>{pedido.nombre_plato}</Td>
                                    <Td>{pedido.cantidad}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </ContFactura>
                <ResPrecios>
                </ResPrecios>
                <ContBoton>
                    <BotonImprimir onClick={handlePrintClick}>Imprimir pedido</BotonImprimir>
                        <BotonImprimir onClick={regresa}>regresar</BotonImprimir>
                </ContBoton>
            </ContPrincipal>
        </Background>
    );
};

export default ImprimirDomicilio;
