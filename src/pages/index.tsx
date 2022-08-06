import type { NextPage } from "next";
import React from "react";
import Layout from "../components/Basic/Layout/Layout";
import HomePage from "../components/pages/Homepage";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default Home;
