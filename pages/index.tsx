import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rafael Scholant - Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Apenas um desenvolvedor, um pouco fora do comum."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main style={{ marginTop: 150 }}>
        <Container maxWidth="lg">
          <Typography variant="h1">Desenvolvedor full stack</Typography>
          <Typography variant="body1">
            Eu projeto e codifico coisas lindamente simples e amo o que faço.
          </Typography>
        </Container>
      </main>
    </div>
  );
};

export default Home;
