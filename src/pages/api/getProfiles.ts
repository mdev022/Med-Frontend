// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import AxiosApi from '../../config/apiAxios';
import apiOptions, { GET_ALL_PROFILES } from '../../config/endpoints';

type Data = {
  name: string
}

const filterResults = (searchText: string | string[] | undefined, searchableData) => {
  const trimmedSearchText = searchText?.replace(/ /g,'')?.toLowerCase();
  console.log('trimmedSearchText',trimmedSearchText,searchableData);
  return searchableData.filter(item=> {
    const docNameTrimmed = item.info_section?.displayName?.replace(/ /g,'')?.toLowerCase();
    if(docNameTrimmed && docNameTrimmed.includes(trimmedSearchText)){
      return item;
    }
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const searchQuery:string | string[] | undefined = req.query.search;
  try {
    const data = await AxiosApi(apiOptions(GET_ALL_PROFILES)).then(res=> res.data);
    if(searchQuery){
      const filteredList = filterResults(searchQuery,data );
      //   console.log('filtered Results',filteredList );
      return res.status(200).json(filteredList);
    }
    return res.status(200).json(data);
  } catch (error) {
    // console.log('error',error);
    return res.status(500).json({error: "Internal Server Error"});
  }
}
