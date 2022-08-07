import { Formik } from "formik";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Input from "../../components/Basic/Input";
import Layout from "../../components/Basic/Layout/Layout";
import AxiosApi from "../../config/apiAxios";
import apiOptions, { GET_PROFILE_WITH_SLUG, USER_LOGIN, USER_SIGNUP } from "../../config/endpoints";
import useAuth from "../../hooks/useAuth";
import { LoginFormSchema } from "../../utils/validations";
import styles from  "./index.module.scss";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Login: NextPage = () => {
  const auth = useAuth();
  const router = useRouter();
  console.log('auth',auth);


  // useEffect(()=> {
  //   AxiosApi({...apiOptions(GET_PROFILE_WITH_SLUG),params: {slug: "anish-maitra"}});
  // },[auth?.user]);

  const handleLogin = async (values: {email:string; password: string}) => {
    try {
      const res = await AxiosApi({...apiOptions(USER_LOGIN), data: values});
      localStorage.setItem("access", res?.data?.authToken);
      router.push('/');
    } catch (error) {
      console.log('error',error);
    }
  };

  if(auth.loading){
    return (
      <Layout contentStyleClass={styles.contentLayout}>
        <div className="spinner-border text-success" role="status">
        </div>
      </Layout>
    );
  }

  if(auth?.user?.id){
    return (
      <>
        <Layout contentStyleClass={styles.contentLayout}>
          <div className={styles.loggedInScreenWrapper}>
            <div className={styles.welcomeText}>
              You are logged in...
            </div>
            <button className={`${styles.redirectButton}`}>
              <Link href="/">
                Go to dashboard
              </Link>
            </button>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout contentStyleClass={styles.contentLayout}>
        <div className={`${styles.wrapper} container d-flex flex-column justify-content-center align-items-center `}>
          <div className={styles.loginHeader}>
            <h3>Login</h3>
          </div>
          <Formik 
            onSubmit={(values)=> 
            {
              if(values.email && values.password){
                handleLogin(values);
              }
            }
            } 
            validationSchema={LoginFormSchema} 
            initialValues={{ email: '', password: '' }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            })=> (
              <form className={styles.formClass} onSubmit={(e)=> {
                e.preventDefault();
                handleSubmit();
              }}>
                {console.log("styles",styles.loginInput)}
                <Input
                  type="email"
                  value={values.email}
                  // placeholder="Enter your email"
                  className={styles.loginInput}
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorLabelProps={{message: errors.email, customStyle: styles.inputErrorMsg}}
                />
                <Input
                  type="password"
                  value={values.password}
                  // placeholder="Enter your password"
                  label="Password"
                  className={styles.loginInput}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorLabelProps={{message: errors.password, customStyle: styles.inputErrorMsg}}
                />
                <button type="submit" className={`${styles.loginButton} btn`}>Login</button>
              </form>
            )}
          </Formik>
          
        </div>
      </Layout>
    </>
  );
};

export default Login;
