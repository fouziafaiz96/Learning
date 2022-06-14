import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import { BgDiv } from "./style";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Mania</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BgDiv>
        <div className="container">
          <p>PIZZA MAN</p>
          <span>ONLINE ORDERING</span>
        </div>
      </BgDiv>

      <Footer />
    </div>
  );
};

export default Home;

