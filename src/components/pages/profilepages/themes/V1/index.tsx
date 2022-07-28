import React from 'react';

export interface IProfilePageV1 {
  pageData: any;
}
const ProfilePageV1 = ({
  pageData
}:IProfilePageV1) => {
  return (
    <div>
      <h2>IProfilePageV1</h2>
      <h3>{pageData?.about?.heading}</h3>
      <p>{pageData?.about?.text}</p>
    </div>
  );
};
export default ProfilePageV1;
