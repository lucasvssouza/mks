import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { GetProducts } from "@/pages/api/api";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import {
  GlobalStyle,
  Cart_Button,
  Cart_Quantity,
  Cart_Vector,
  Footer,
  Main,
  MKS,
  Sistemas,
  Navbar,
  Nav_Container,
  Title_Container,
  Product_Grid,
} from "@/styles/home";
import ProductComponent from "@/components/ProductComponent";
import MainComponent from "@/components/MainComponent";
import LoadingComponent from "@/components/LoadingComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const GetData = async () => {
    try {
      const apiResult: Array<Product> = await GetProducts();
      if (apiResult.length > 0) {
        setData(apiResult);
        setLoading(false);
      }
    } catch (e) {
      console.log("Error")
      setData([]);
    }
  };

  useEffect(() => {
    GetData();
  }, [loading]);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <LoadingComponent /> : <MainComponent products={data} />}
    </>
  );
}
