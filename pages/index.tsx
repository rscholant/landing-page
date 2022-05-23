import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../src/components/About";
import Header from "../src/components/Header";
import Main from "../src/components/Main";

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
      <Header />
      <Main />
      <About />
    </div>
  );
};

export default Home;
