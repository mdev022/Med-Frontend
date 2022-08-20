import Link from "next/link";
import React from "react";
import MailIconRed from "../../SvgComponents/MailIconRed";
import PhoneIconRed from "../../SvgComponents/PhoneIconRed";
import {CopyToClipboard} from 'react-copy-to-clipboard';

interface IDashboardProps {
    user: any;
}

const Dashboard = ({user}:IDashboardProps) => {
  console.log('dashboard user',user);

  
  return <>
    <div className="container dashboard__wrapper">
      <div className="dashboard__content">
        <div className="dashboard__row1">
          <h1>Welcome {user?.first_name} !</h1>
          <div className="dashboard__row1__greetingText">
              Congratulations you are now a member of Medinery
          </div>
        </div>

        <div className="dashboard__row2">
          {
            user?.subscribed ? <><div className="dashboard__row2__col col1">
              <h3>Plan Details</h3>
              <div>
                <span className="plan-status">Status {" "} :</span> {user?.subscribed ? 
                  <span className="plan-active">Active</span> 
                  :<span className="plan-inactive">Inactive</span>}
              </div>
              {
                <div>
                  <span  className="expiration-date">Expiration Date : <span>ddddd{user?.plan_expiry_date}</span></span>
                </div>
              }
              <div>
                <span  className="theme-info">Theme : <span>{user?.profile_page?.theme}</span></span>
              </div>
            </div>
            <div className="dashboard__row2__col col2">
              <h3>Personal Info</h3>
              <div>
                <span><MailIconRed />  {user?.email}</span>
              </div>
              <div>
                <span><PhoneIconRed /> {user?.phone_no}</span>
              </div>
            </div>
            <div className="dashboard__row2__col col3">
              <h3>Profile Info</h3>
              <CopyToClipboard text={`https://medinery.com/profile/${user.profile_page?.slug}`} onCopy={() => console.log('copied')}>
                <div className="profile-url">
                  {`https://medinery.com/profile/${user.profile_page?.slug}`}
                </div>
              </CopyToClipboard>
              <div className="profile-visit">
                <a target="_blank" href={`/profile/${user.profile_page?.slug}`} rel="noreferrer">Click here to visit your profile</a>
              </div>
            </div></> :
              <div className="dashboard__notSubscribedContent">
                <h4>Oops, looks like you are not subscribed with our porfolio plan yet. Are you a doctor ?</h4>
                <h5><Link href="/">Click here </Link>to join us and get your own profile in no time !</h5>
                <div className="dashboard__row2__col col2">
                  <h3>Personal Info</h3>
                  <div>
                    <span><MailIconRed />  {user?.email}</span>
                  </div>
                  <div>
                    <span><PhoneIconRed /> {user?.phone_no}</span>
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  </>;
};

export default Dashboard;