import { Formik } from "formik";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Input from "../../components/Basic/Input";
import Layout from "../../components/Basic/Layout/Layout";
import AxiosApi from "../../config/apiAxios";
import apiOptions, { GET_PROFILE_WITH_SLUG, USER_LOGIN, USER_SIGNUP } from "../../config/endpoints";
import useAuth from "../../hooks/useAuth";
import { LoginFormSchema, SignupFormSchema } from "../../utils/validations";
import styles from  "./index.module.scss";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const SignUp: NextPage = () => {
  const auth = useAuth();
  const router = useRouter();
  console.log('auth',auth);

  const [errorMsg, setErrorMsg] = useState<string>();
  const [requestLoading, setRequestLoading] = useState<boolean>(false);

  useEffect(()=> {
    if(errorMsg){
      setTimeout(()=> {
        setErrorMsg("");
      },5000);
    }
  },[errorMsg]);


  // useEffect(()=> {
  //   AxiosApi({...apiOptions(GET_PROFILE_WITH_SLUG),params: {slug: "anish-maitra"}});
  // },[auth?.user]);

  const handleSignUp = async (values: {email:string; password: string, fullname: string, phone: string}) => {
    setRequestLoading(true);
    try {
      const res = await AxiosApi({...apiOptions(USER_SIGNUP), data: {...values,name: values.fullname, phone_no: values.phone}});
      localStorage.setItem("access", res?.data?.authToken);
      router.push('/');
    } catch (errorObj) {
      // console.log(errorObj.response?.data, "errorObj");
      if(errorObj?.response?.data?.message){
        setErrorMsg(errorObj?.response?.data?.message);
      }
     
    }
    setRequestLoading(false);
  };

  console.log('setErrorMsg',errorMsg);

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
            <h3>Sign up</h3>
          </div>
          <Formik 
            onSubmit={(values)=> 
            {
              if(values.email && values.password && values.fullname && values.phone && values.phone.length === 10){
                handleSignUp(values);
              }
            }
            }
            validationSchema={SignupFormSchema} 
            initialValues={{ email: '', password: '', fullname: '', phone: '' }}
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
                  type="text"
                  value={values.fullname}
                  // placeholder="Enter your email"
                  className={styles.loginInput}
                  label="Full Name"
                  name="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorLabelProps={{message: errors.fullname, customStyle: styles.inputErrorMsg}}
                />
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
                  type="text"
                  value={values.phone}
                  // placeholder="Enter your email"
                  className={styles.loginInput}
                  label="Phone no"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorLabelProps={{message: errors.phone, customStyle: styles.inputErrorMsg}}
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
                {
                  errorMsg && <div className={styles.errorMsgWrapper}>
                    <span>{errorMsg}</span>
                  </div>
                }
                
                {
                  requestLoading ? <div className="spinner-border text-success" role="status">
                  </div> :   <button type="submit" className={`${styles.loginButton} btn`}>Sign up</button>
                }

                <div className={styles.backtoLoginText}>
                  <Link href="/login">Already have an account ?. Login here.</Link>
                </div>
              
              </form>
            )}
          </Formik>
          
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
