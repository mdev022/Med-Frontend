import Link from "next/link";
import React from "react";
import MailIconRed from "../../SvgComponents/MailIconRed";
import PhoneIconRed from "../../SvgComponents/PhoneIconRed";

interface IDashboardProps {
    user: any;
}

const Dashboard = ({user}:IDashboardProps) => {
  console.log('dashboard user',user);

  
  return <>
    <div className="container dashboard__wrapper">
      <div className="dashboard__content">
        <div className="dashboard__row1">
          <h1>Welcome {user?.name} !</h1>
          <div className="dashboard__row1__contactdetails">
            <span><MailIconRed />  {user?.email}</span>
            <span><PhoneIconRed /> {user?.phone_no}</span>
          </div>
        </div>

        <div className="dashboard__row2">
          <div className="dashboard__row2__col col1">
            <h3>Plan Details</h3>
            <div>
              <span className="plan-status">Status {" "} :</span> {user?.subscribed ? 
                <span className="plan-active">Active</span> 
                :<span className="plan-inactive">Inactive</span>}
            </div>
            {
              user?.plan_expiry_date && <div>
                <span  className="expiration-date">Expiration Date : <span>{user?.plan_expiry_date}</span></span>
              </div>
            }
            <div>
              <span  className="theme-info">Theme : <span>{user?.profile_page?.theme}</span></span>
            </div>
          </div>
          <div className="dashboard__row2__col col2">
            <h3>Plan Details</h3>
          </div>
          <div className="dashboard__row2__col col3">
            <h3>Profile Info</h3>
            <div className="profile-url">
              {`https://medinery.com/profile/${user.profile_page?.slug}`}
            </div>
            <div className="profile-visit">
              <a target="_blank" href={`/profile/${user.profile_page?.slug}`} rel="noreferrer">Visit your Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Dashboard;