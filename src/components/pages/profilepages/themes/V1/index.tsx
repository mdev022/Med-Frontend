import Image from 'next/image';
import React from 'react';
import ConnectSection from '../../../../Basic/ConnectSection/ConnectSection';
import EducationList from '../../../../Basic/EducationList/EducationList';
import ExperienceCard from '../../../../Basic/ExperienceCard/ExperienceCard';
import InterestSection from '../../../../Basic/InterestSection/InterestSection';
import FacebookIconDark from '../../../../SvgComponents/FacebookIconDark';
import MailIconRed from '../../../../SvgComponents/MailIconRed';
import PhoneIconRed from '../../../../SvgComponents/PhoneIconRed';
import TwitterIconDark from '../../../../SvgComponents/TwitterIconDark';
import YoutubeIconDark from '../../../../SvgComponents/YoutubeIconDark';
import styles from "./index.module.scss";

export interface IProfilePageV1 {
  pageData: any;
}
const ProfilePageV1 = ({
  pageData
}:IProfilePageV1) => {

  console.log('pageData',pageData);
  //Data
  const infoSectionData = pageData?.info_section;
  const videoSectionData = pageData?.video_section;
  const aboutSectionData = pageData?.about;
  const expirienceSectionData = pageData?.experience_section;
  const educationSectionData = pageData?.education_section;
  const interestSectionData = pageData?.Fields_of_Interest;


  




  const ProfileSection = () => (
    <div className="aboutWrapper">
      <div className="aboutContainer container">
        {/* <h2>IProfilePageV1</h2>
        <h3>{pageData?.about?.heading}</h3>
        <p>{pageData?.about?.text}</p> */}
        <div className="profileImageWrapper p-4">
          <img src={pageData?.image?.url} />
        </div>
        <div className="profileInfoWrapper">
          <div className='contact-fields p-2'>
            <span><MailIconRed /> {infoSectionData?.display_email}</span>
            <span><PhoneIconRed /> {infoSectionData?.display_number}</span>
          </div>
          <div className="profile_info_text p-4">
            <h1>{infoSectionData?.displayName}</h1>
            <h5>{infoSectionData?.specialization}</h5>
            <p>{infoSectionData?.bio_text}
            </p>
            <div className='social_icons_wrapper'>
              <a href={infoSectionData?.socials?.facebook_link}><FacebookIconDark /></a>
              <a href={infoSectionData?.socials?.youtube_link}> <YoutubeIconDark /></a>
              <a href={infoSectionData?.socials?.twitter_link}><TwitterIconDark /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const IntroSectionWithVideo = () => (
    <div className='introSection container p-4'>
      <h1 className='mb-4'>{videoSectionData?.heading}</h1>
      <p className='mb-4'>{videoSectionData?.description}
      </p>
      <div className='intro-video-wrapper'>
        <iframe src={videoSectionData?.video_link} />
      </div>
    </div>
  );

  const Divider = () => (
    <div className='container py-4'>
      <div className='divider-line' />
    </div>
  );

  const AboutSection = () => (
    <div className='aboutSection container p-4'>
      <div className="aboutSection__image p-2">
        <img src={pageData?.image?.url} />
      </div>
      <div className="aboutSection__info p-2">
        <h1>{aboutSectionData?.heading}</h1>
        <div className='aboutSection__info__description'>
          <div></div>
          <p>
            {aboutSectionData?.text}
          </p>
        </div>
        <button>Contact me</button>
      </div>
    </div>
  );

  const ExperienceSection = () => (
    <div className='experienceSection'>
      <div className='container'>
        <h1 className='headerWithShadow experienceSection__header'>Experience<span>Experience</span></h1>
        <div className='experienceSection__cardsWrapper'>
          {
            expirienceSectionData?.map((experienceCard,index)=> {
              return (
                <ExperienceCard 
                  key={index.toString()}
                  wrapperStyleClass="card_wrapper" 
                  heading={experienceCard?.title} 
                  listItems={experienceCard.pointers} 
                />
              );
            })
          }
         
          {/* <ExperienceCard 
            wrapperStyleClass="card_wrapper" 
            heading='Experience' 
            listItems={['Cardiac electrophysiology','Cardiogeriatrics','Imaging']} 
          />
          <ExperienceCard 
            wrapperStyleClass="card_wrapper" 
            heading='Experience' 
            listItems={['Cardiac electrophysiology','Cardiogeriatrics','Imaging']} 
          /> */}
        </div>
      </div>
    </div>
  );

  const EducationSection = () => (
    <div className='container educationSection'>
      <h1 className='headerWithShadow educationSection__header'>Education<span>Education</span></h1>

      <EducationList 
        itemClass="educationSection__item"
        list={educationSectionData} 
      />
    </div>
  );
  

  return (
    <div>
      {
        infoSectionData && <ProfileSection />
      }

      {
        videoSectionData &&  <IntroSectionWithVideo />
      }

      {
        aboutSectionData && <AboutSection />
      }

      {
        expirienceSectionData &&      <ExperienceSection />
      }

      {
        educationSectionData && <EducationSection />
      }

      {
        interestSectionData &&  <InterestSection 
          header={ <h1 className='headerWithShadow interestSection__header'>Interests<span>Interests</span></h1>} 
          list={interestSectionData?.map(interestObj=> interestObj.interest_field)}
          wrapperClass="interestSection"
        />
      }

      {
        infoSectionData && <ConnectSection data={infoSectionData} headerWithShadow />
      }
    </div>
  );
};
export default ProfilePageV1;
