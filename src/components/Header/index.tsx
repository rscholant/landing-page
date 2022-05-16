import { AppBar, Button, Container } from "@mui/material";
import React from "react";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <AppBar position="fixed" color="inherit">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Image src="/barba.png" alt="logo" width={104} height={104} />
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button variant="outlined" sx={{ borderRadius: 8 }}>
            Diga Olá!
          </Button>
        </Container>
      </Container>
    </AppBar>
  );
};

export default Header;
