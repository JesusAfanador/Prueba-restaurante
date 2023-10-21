import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import AuthContextProvider from "./components/context/AuthContext";
import { DataProvider } from "./components/vista-mesa/data.context/data.state.context";
import { PrincipalConnect } from "./components/vista-principal-domicilio/principal";
import Crearcuenta from "./components/Crear-cuenta/Principal"
import Logini from "./components/login/Principal"
import { Domicilio } from "./components/vista-domicilio/principal";
import Pedidos from "./components/pedidos/principal";
import PedidosBe from "./components/PedidoBebida/pedido1"
import Carrito from "./components/orden/principal";
import { Dashboard } from "./components/dashboard/dashboardj";
import Informacion from "./components/informacion/informacion";
import PublicRoute from "./components/rout/PublicRoute";
import PrivateRoute from "./components/rout/PrivateRoute";
import Logout from "./components/login/logout";
import VistaMesa from "./components/vista-mesa/principal"
import Factura from "./components/vista-factura/principal";
import { Fisica } from "./components/Vista-fisica/principal";
import { LOGOUT, PRIVATE, PUBLIC } from "./components/router/path";
import PrincipalDashboard from "./components/vista-dashboard/Principal-Dashboard";
import { Inventario } from "./components/vista-inventario/principal";
import PedidoFisica from "./components/pedido-fisico/principal";
import BebidaFisica from "./components/bebida-fisica/principal";
import TodoFisica from "./components/Todo-fisica/todo";
import CarritoFisica from "./components/orden-fisica/principal";
import SelectFactura from "./components/select-factura/factura";
import RecibirOrden from "./components/vista-recibir-orden/principal";
import RegistroFactura from "./components/vista-registros-fact/principal";
import { DashboardBebida } from "./components/dashboardBebida/dashboard.bebida";
import { ListarAdmin } from "./components/traer.admin/traeradmin";
import { TraerPlatos } from "./components/traerPlatos/traer.platos";
import { TraerBebidas } from "./components/traer.Bebidas/traerBebida";
import FacturaDomicilio from "./components/factura-domicilio/principal";
import Imprimir from "./components/imprimir-pedido/principal";
import ImprimirDomicilio from "./components/imprimir-pedido-domicilio/principal";
import ActualizarUser from "./components/actualizaradmin/actualizar.admin"
import ActualizarContraseña from "./components/VentanasModal/ActualizarContraseña";
import { ActualizarPlato } from "./components/actualizarPlato/actualizar.plato";
import { ActualizarBebida } from "./components/actualizar-bebida/actualizar.bebida";
import ActualizarImg from "./components/imgActualizar/img.actualizar";
import ActualizarImgBebida from "./components/img-actualizar-bebida/img.actualizar.bebida";
import Todo from "./components/Todo/todo";
import { CreaMesas } from "./components/crea-mesa/mesas";
import RegistroDomi from "./components/vista-registros-domi/principal";
import ActualizaInfor from "./components/dashboardInformacion/mostrarInfor/TodaInfor";
import ActualizarInformacion from "./components/dashboardInformacion/actualizarInfor/ActualizarInfor";
import ActualizarImgInfor from "./components/dashboardInformacion/cambiarImg/cambiaImgInfor";
import { CreaInformacion } from "./components/dashboardInformacion/crearInformacion/crearInfor";
import RegistroDomi2 from "./components/registro-domicilio-dash/principal";
import RegistroFactura2 from "./components/registro-fact-dash/principal";

export const App = () => {
return(
    <>  
        <AuthContextProvider>
            <DataProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={PUBLIC} element = {<PublicRoute />}>
                            <Route element = {<Todo/>}> 
                                <Route index/>
                                <Route path="/menu" element = {<PrincipalConnect/>}/>
                                <Route path="/pedido/:id" element = {<Pedidos/>}></Route> 
                                <Route path="/pedidoBebida/:id" element = {<PedidosBe/>}></Route>
                                <Route path="/informacion" element = {<Informacion/>}></Route>
                            </Route>
                                <Route path="/ordenes" element = {<Carrito/>}></Route> 
                                <Route path="/domicilio" element = {<Domicilio/>}></Route>
                                <Route path= "/mesa" element = {<VistaMesa/>}></Route>
                                <Route path="/login" element = {<Logini/>}></Route>     
                        </Route>
                        <Route path={PRIVATE} element = {<PrivateRoute/>}>
                            <Route element = {<PrincipalDashboard/>}>
                                <Route index/> 
                                <Route path="creaMesas" element = {<CreaMesas/>}></Route>    
                                <Route path="register" element = {<Crearcuenta/>}/>
                                <Route path="dashboard" element = {<Dashboard/>}/>
                                <Route path="crearBebida" element = {<DashboardBebida/>}/>
                                <Route path="inventario" element = {<Inventario/>}/>
                                <Route path="traerAdmin" element = {<ListarAdmin/>}></Route>
                                <Route path="traerBebida" element = {<TraerBebidas/>}></Route>
                                <Route path="traerPlato" element  = {<TraerPlatos/>}></Route>
                                <Route path="actualizaradmin/:id" element = {<ActualizarUser/>}></Route>
                                <Route path="actualizarContraseña/:id" element = {<ActualizarContraseña/>}></Route>
                                <Route path="actualizarPlato/:id" element = {<ActualizarPlato/>}></Route>
                                <Route path="actualizarbebida/:id" element = {<ActualizarBebida/>}></Route>
                                <Route path="actualizarImgPlato/:id" element={<ActualizarImg/>}></Route>
                                <Route path="actualizarImgbebida/:id" element = {<ActualizarImgBebida/>}></Route>
                                <Route path="informate" element = {<ActualizaInfor/>}></Route>
                                <Route path="actualizate/:id" element = {<ActualizarInformacion/>}></Route>
                                <Route path="actualizarImgInfor/:id" element = {<ActualizarImgInfor/>}></Route>
                                <Route path="crearInfor" element = {<CreaInformacion/>}></Route>
                                <Route path="registro-fact2" element = {<RegistroFactura2/>}></Route>
                                <Route path="registrosdomi2" element = {<RegistroDomi2/>}></Route>
                            </Route>
                            <Route path={LOGOUT} element = {<Logout/>}/>
                            <Route path="todofisica" element = {<TodoFisica/>}>
                                <Route path="fisica" element = {<Fisica/>}/>
                                <Route path="pedidofisica/:id" element = {<PedidoFisica/>}/>
                                <Route path="bebidafisica/:id" element = {<BebidaFisica/>}/>
                                <Route path="carritofisica" element = {<CarritoFisica/>}/>
                                <Route path= "mesa" element = {<VistaMesa/>}></Route>
                                <Route path="factura/:id" element = {<Factura/>}/>
                                <Route path="imprimir" element = {<Imprimir/>}></Route>
                                <Route path="imprimirdomicilio/:di" element = {<ImprimirDomicilio/>}></Route>
                                <Route path="facturadomicilio/:di" element = {<FacturaDomicilio/>}/>
                                <Route path="registrosdomi" element = {<RegistroDomi/>}></Route>
                                <Route path="recibir-orden" element = {<RecibirOrden/>}></Route>
                                <Route path="registro-fact" element = {<RegistroFactura/>}></Route>
                                <Route path="selectfactura" element = {<SelectFactura/>}></Route>
                            </Route>
                        </Route>   
                    </Routes>
                </BrowserRouter>
            </DataProvider>
        </AuthContextProvider>
    </>
    )
}