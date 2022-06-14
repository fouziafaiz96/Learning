import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FLexCenter, HeadingDiv } from "./style";
import axios from "axios";

const ContactUs: NextPage = () => {
  const [file, setFile] = useState<File | null>();
  const onChange = (e: any) => {
    const element = e.currentTarget as HTMLInputElement;
    if (element != null) setFile(element?.files?.[0]);
  };
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    const formData: any = new FormData();
    formData.append("myImage", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("profile-upload-single", formData, config)
      .then((response: any) => {
        console.log("The file is successfully uploaded", response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Pizza Mania</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeadingDiv>CONTACT US</HeadingDiv>
      <FLexCenter>
        <form onSubmit={onFormSubmit}>
          <h1>File Upload</h1>
          <input type="file" name="myImage" onChange={onChange} />
          <button type="submit">Upload</button>
        </form>
      </FLexCenter>

      <Footer />
    </>
  );
};

export default ContactUs;
