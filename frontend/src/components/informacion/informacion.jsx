import React, { useEffect, useState } from "react";
import Axios from "axios"
import marco from "../Img/marco.png"
import { Container, ConteCarrusel, Box, Contenedor,H1, H2, H3, Box2 } from "./styled";

const Informacion = () => {
  const [informacion, setInformacion] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % total);
  };
  const prevImage = () => {
    setCurrentImage((currentImage - 1 + total) % total);
  };
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_PRIMERO_UNO}/api/informacion`)
      .then((response) => {
        setInformacion(response.data);
        setTotal(response.data.length);
      })
      .catch(error => {
      });
  }, []);
  setTimeout(() => {
  nextImage();
  }, 3000);

  return (
    <>
      <Container>
        <ConteCarrusel>
          <Box>
            <center>
              {informacion.map((infor, index) => (
                <Contenedor
                  key={index}
                  style={{
                    backgroundImage: `url(${marco})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: index === currentImage ? "block" : "none",
                  }}>
                  <H1>{infor.Titulo}</H1>
                  <H2>{infor.Informacion}</H2>
                  <H3>{infor.noticia}</H3>
                  <Box2 style={{ backgroundImage: `url(${process.env.REACT_APP_PRIMERO_UNO}/api/${infor.imagen})`,}}></Box2>
                </Contenedor>
              ))}
            </center>
          </Box>
        </ConteCarrusel>
      </Container>
    </>
  );
};

export default Informacion;