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
    customHeaderText?:string;
    data:any

}

export default function ConnectSection({
  headerWithShadow,
  data,
  styleClass,
  customHeaderText
}: IConnectionSectionProps) {
  const headerText = customHeaderText || "Connect";
  const ConnectSectionHeader: () => JSX.Element = () => {
    return headerWithShadow ?  <h1 className='headerWithShadow'>{headerText}<span>{headerText}</span></h1> : <h1>{headerText}</h1>;
  };

  return (
    <div className={`${styles.wrapper} container ${styleClass}__wrapper `}>
      <ConnectSectionHeader  />
      <div className={`${styles.connectInfoWrapper} ${styleClass}__infowrapper`}>
        <div className={``}><MailIconRed /> <span>{data?.display_email}</span></div>
        <div className={``}><PhoneIconRed /> <span>{data?.display_number}</span></div>
      </div>
      <div className={`${styles.connectWithMeWrapper} ${styleClass}__socialswrapper`} >
        <h5>Or connect with me</h5>
        <div>  <a href={data?.socials?.facebook_link}><FacebookIconDark /></a>
          <a href={data?.socials?.youtube_link}> <YoutubeIconDark /></a>
          <a href={data?.socials?.twitter_link}><TwitterIconDark /></a>
        </div>
      </div>
    </div>
  );
}
