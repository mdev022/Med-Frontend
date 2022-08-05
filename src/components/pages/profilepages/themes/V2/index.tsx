import React from 'react';

export interface IProfilePageV2 {
  pageData: any;
}
const ProfilePageV2 = ({pageData}: IProfilePageV2) => {
  return (
    <div>
      <h2>ProfilePageV2</h2>
      <h3>{pageData?.about?.heading}</h3>
      <p>{pageData?.about?.text}</p>
    </div>
  );
};
export default ProfilePageV2;
