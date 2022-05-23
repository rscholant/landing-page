import { Avatar, Container, Typography } from "@mui/material";
import React from "react";

const Main: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      style={{
        display: "flex",
        height: "101vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" color="primary">
        Desenvolvedor full stack
      </Typography>
      <Typography variant="subtitle1" color="secondary">
        Eu projeto e codifico coisas lindamente simples e amo o que faço.
      </Typography>
      <Avatar
        src="avatar.png"
        sx={{ width: 280, height: 280, backgroundColor: "primary.main" }}
        style={{ marginTop: "80px" }}
      />
    </Container>
  );
};

export default Main;
