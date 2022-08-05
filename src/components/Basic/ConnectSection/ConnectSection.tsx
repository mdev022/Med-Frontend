import React from 'react';
import FacebookIconDark from '../../SvgComponents/FacebookIconDark';
import MailIconRed from '../../SvgComponents/MailIconRed';
import PhoneIconRed from '../../SvgComponents/PhoneIconRed';
import TwitterIconDark from '../../SvgComponents/TwitterIconDark';
import YoutubeIconDark from '../../SvgComponents/YoutubeIconDark';
import styles from "./index.module.scss";

interface IConnectionSectionProps{
    headerWithShadow?: boolean;
    styleClass?:string;

}

export default function ConnectSection({
  headerWithShadow,
  styleClass
}: IConnectionSectionProps) {
  const ConnectSectionHeader: () => JSX.Element = () => {
    return headerWithShadow ?  <h1 className='headerWithShadow'>Connect<span>Connect</span></h1> : <h1>Connect</h1>;
  };

  return (
    <div className={`${styles.wrapper} container `}>
      <ConnectSectionHeader />
      <div className={`${styles.connectInfoWrapper}`}>
        <div className={``}><MailIconRed /> <span>kunalsarkar12@gmail.com</span></div>
        <div className={``}><PhoneIconRed /> <span>+91 9416846189</span></div>
      </div>
      <div className={`${styles.connectWithMeWrapper}`} >
        <h4>Or connect with me</h4>
        <div><FacebookIconDark/>
          <YoutubeIconDark />  
          <TwitterIconDark /> 
        </div>
      </div>
    </div>
  );
}
