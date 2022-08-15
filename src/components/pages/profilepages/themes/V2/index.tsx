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

export interface IProfilePageV2 {
  pageData: any;
}
const ProfilePageV2 = ({
  pageData
}:IProfilePageV2) => {

  console.log('pageData',pageData);
  //Data
  const infoSectionData = pageData?.info_section;
  const videoSectionData = pageData?.video_section;
  const aboutSectionData = pageData?.about;
  const expirienceSectionData = pageData?.experience_section;
  const educationSectionData = pageData?.education_section;
  const interestSectionData = pageData?.Fields_of_Interest;


  




  const ProfileSection = () => (
    <div className="aboutWrapper__v2">
      <div className="aboutContainer__v2 container">
        {/* <h2>IProfilePageV2</h2>
        <h3>{pageData?.about?.heading}</h3>
        <p>{pageData?.about?.text}</p> */}
        <div className="profileImageWrapper__v2 p-2">
          <img src={pageData?.image?.url} />
        </div>
        <div className="profileInfoWrapper__v2">
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
    <div className='introSection__v2 container p-4'>
      <h1 className='mb-4'>{videoSectionData?.heading}</h1>
      <p className='mb-4'>{videoSectionData?.description}
      </p>
      <div className='introSection__v2__contentWrapper'>
        <div className='introSection__v2__contentWrapper__video'>
          <iframe src={videoSectionData?.video_link} />
        </div>
        <div className='introSection__v2__contentWrapper__aboutText'>
          {
            videoSectionData?.aboutText && <p>
              {videoSectionData?.aboutText}
            </p>
          }
          
          <button>Contact me</button>
        </div>
      </div>
    </div>
  );

  const Divider = () => (
    <div className='container py-4'>
      <div className='divider-line' />
    </div>
  );

  const AboutSection = () => (
    <div className='aboutSection__v2 container p-4'>
      <div className="aboutSection__v2__image p-2">
        <img src={pageData?.image?.url} />
      </div>
      <div className="aboutSection__v2__info p-2">
        <h1>{aboutSectionData?.heading}</h1>
        <div className='aboutSection__v2__info__description'>
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
    <div className='experienceSection__v2'>
      <div className='container'>
        <h1 className='experienceSection__v2__header'>Experience</h1>
        <div className='experienceSection__v2__cardsWrapper'>
          {
            expirienceSectionData?.map((experienceCard,index)=> {
              return (
                <ExperienceCard 
                  key={index}
                  listWrapperClass="experienceSection__v2__listWrapper"
                  wrapperStyleClass="card_wrapper" 
                  heading={experienceCard?.title} 
                  listItems={experienceCard.pointers} 
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );

  const EducationSection = () => (
    <div className='container educationSection__v2'>
      <h1 className='educationSection__v2__header'>Education</h1>

      <EducationList 
        itemClass="educationSection__v2__item"
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

      {/* {
        aboutSectionData && <AboutSection />
      } */}

      {
        expirienceSectionData &&      <ExperienceSection />
      }

      {
        educationSectionData && <EducationSection />
      }

      {
        interestSectionData &&  <InterestSection 
          header={ <h1 className='interestSection__v2__header'>Interests</h1>} 
          list={interestSectionData?.map(interestObj=> interestObj.interest_field)}
          wrapperClass="interestSection__v2"
        />
      }

      {
        infoSectionData && <ConnectSection  styleClass="connectWithMe__v2" data={infoSectionData} customHeaderText="Connect with me"/>
      }
    </div>
  );
};
export default ProfilePageV2;
