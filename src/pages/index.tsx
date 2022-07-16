import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../components/Basic/Layout/Layout";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <h2>Home Page</h2>
      </div>
    </Layout>
  );
};

export default Home;
