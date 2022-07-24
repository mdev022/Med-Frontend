import React, { useEffect, useState } from 'react';
import AxiosApi from '../config/apiAxios';
import apiOptions, { GET_USER } from '../config/endpoints';

export default function useAuth() {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true);
    AxiosApi(apiOptions(GET_USER)).then(res=>{
      setUser(res.data);
      setLoading(false);
    }).catch(err=> {
      console.log(err);
      setLoading(false);
    });
  },[]);
  return {user,loading};
}
