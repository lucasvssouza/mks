import Head from "next/head";
import { GetProducts } from "@/pages/api/api";
import { useEffect } from "react";
import MainComponent from "@/components/MainComponent";
import SkeletonComponent from "@/components/SkeletonComponent";
import { setLoading } from "@/features/loading/loading-slicer";
import { setProducts } from "@/features/products/products-slicer";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/features/hooks";
import { GlobalStyle } from "@/styles/global";
import { IApi } from "@/types/api";

export default function Home() {
  const loading: boolean = useAppSelector((state) => state.loading);
  const dispatch = useDispatch();

  const GetData = async () => {
    try {
      const apiResult: IApi | undefined = await GetProducts();
      if (apiResult!.data.length > 0) {
        dispatch(setProducts(apiResult!.data));
        setTimeout(function () {
          dispatch(setLoading(false));
        }, 1000);
      }
    } catch (e) {
      dispatch(setProducts([]));
      console.log("Erro na API");
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>MKS Sistemas - Shop</title>
        <meta name="description" content="MKS Sistemas - Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {loading ? <SkeletonComponent /> : <MainComponent />}
    </>
  );
}
