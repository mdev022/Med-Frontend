import React from "react";
import ProfilePageV1 from "./themes/V1";
import ProfilePageV2 from "./themes/V2";
import ProfilePageV3 from "./themes/V3";
import ProfilePageV4 from "./themes/V4";

export interface ProfilePageProptype{
    data: any;
}

const ProfilePage = ({data}:ProfilePageProptype )  => {
  const THEME = data?.theme;
  switch (THEME) {
  case "V1":
    return <ProfilePageV1 pageData={data} />;
  case "V2":
    return <ProfilePageV2 pageData={data} />;
  case "V3":
    return <ProfilePageV3 pageData={data} />;
  case "V4":
    return <ProfilePageV4 pageData={data} />;
  
  default:
    return <ProfilePageV1 pageData={data} />;
  }
};

ProfilePage.displayName="ProfilePage";
export default React.memo(ProfilePage);