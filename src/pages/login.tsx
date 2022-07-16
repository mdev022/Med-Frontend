import { NextPage } from "next";
import React, { useState } from "react";
import Input from "../components/Basic/Input";
import Layout from "../components/Basic/Layout/Layout";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <Layout>
        <div className="container p-md-2 d-flex flex-column justify-content-center align-items-center">
          <Input
            type="email"
            value={email}
            placeholder="Enter your email"
            label="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            value={password}
            placeholder="Enter your password"
            label="Password"
            name="password"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </Layout>
    </>
  );
};

export default Login;
