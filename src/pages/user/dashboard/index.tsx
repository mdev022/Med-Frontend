import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/Basic/Layout/Layout";
import Dashboard from "../../../components/pages/Dashboard";
import useAuth from "../../../hooks/useAuth";

export default function DashboardPage () {
  const auth = useAuth();
  const router = useRouter();

  console.log('auth');

  if(auth.loading){
    return (
      <Layout contentStyleClass="login-wraper">
        <div className="spinner-border text-success" role="status">
        </div>
      </Layout>
    );
  }
  if(auth.user){
    return (
      <Layout>
        <Head>
          <title>Dashboard | {auth?.user?.name}</title>
        </Head>
        <Dashboard user={auth.user} />
      </Layout>
    );
    
  }
  router.push('/login');
}
