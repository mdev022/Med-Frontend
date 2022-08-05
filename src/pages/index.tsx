import type { NextPage } from "next";
import React from "react";
import Layout from "../components/Basic/Layout/Layout";

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
