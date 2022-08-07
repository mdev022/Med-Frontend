import React from "react";
import { string } from "yup";
import Layout from "../../components/Basic/Layout/Layout";
import ProfilePage from "../../components/pages/profilepages";
import AxiosApi from "../../config/apiAxios";
import apiOptions, { GET_ALL_PROFILE_PATHS, GET_PROFILE_WITH_SLUG } from "../../config/endpoints";


export async function getStaticPaths() {
  try {
    const res = await AxiosApi(apiOptions(GET_ALL_PROFILE_PATHS));
    // console.log(res);
    const profilePaths = res?.data?.map((profile: {slug: string, id:number})=> ({params: {slug: profile.slug}}));
    return {
      paths: [...profilePaths],
      fallback: "blocking"
    };
  } catch (error) {
    console.log('error',error);
    return {
      paths: [],
      fallback: false
    };
  }
}

export async function getStaticProps (context:any) {
  // console.log("getStaticProps", context);
  try {
    const res = await AxiosApi({...apiOptions(GET_PROFILE_WITH_SLUG),params: {slug: context.params.slug}});
    const profilePageData = res.data;
    console.log('profilePageData',profilePageData);
    return {
      props: {
        profilePageData
      },
      revalidate: 60
    };
  } catch (error) {
    console.log("<<<<<<<<--------error-------->>>>>>>>",error);
  }
}

export interface IPageProps{
  profilePageData: any;
}
export const Page = ({profilePageData}: IPageProps) => {
  // console.log('profilePageData',profilePageData);
  return (
    <Layout>
      <ProfilePage data={profilePageData} />
    </Layout>
  );
};
export default Page;