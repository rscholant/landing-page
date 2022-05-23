import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
        }}
      >
        <Container
          maxWidth="md"
          style={{
            display: "flex",
            height: "101vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            color="background"
            style={{ marginBottom: "56px" }}
          >
            Oi, eu sou o Rafael, prazer em conhece-lo!
          </Typography>
          <Typography
            variant="h6"
            color="background"
            style={{
              textAlign: "justify",
            }}
          >
            Desde o inicio da minha jornada como desenvolvedor há mais de 10
            anos atrás, trabalhei com diversas linguagens de programação, mas à
            algum tempo encontrei um a stack que realmente me deixa feliz para
            trabalhar todos os dias. E Hoje estou cada vez mais buscando
            conhecimento e trabalhando para melhorar meu conhecimento, pois, eu
            acredito que o conhecimento é o que mais importa para a pessoa e que
            ninguém é pequeno de mais que não possa ajudar ou grande demais que
            não possa pedir ajuda.
          </Typography>
        </Container>
      </Box>
      <Container
        maxWidth="xl"
        style={{
          position: "relative",
          top: "-160px",
          display: "flex",
          height: "101vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        sx={{
          backgroundColor: "background.paper",
          borderRadius: "32px",
          border: "1px solid",
          borderColor: "primary.main",
        }}
      ></Container>
    </>
  );
};

export default About;
