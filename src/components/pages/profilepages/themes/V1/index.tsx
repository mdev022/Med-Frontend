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

  const infoSectionData = pageData?.info_section;

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
            <span><MailIconRed /> kunalsarkar12@gmail.com</span>
            <span><PhoneIconRed /> +91 9416846189</span>
          </div>
          <div className="profile_info_text p-4">
            <h1>{infoSectionData?.displayName}</h1>
            <h5>{infoSectionData?.specialization}</h5>
            <p>{infoSectionData?.bio_text}
            </p>
            <div className='social_icons_wrapper'>
              <FacebookIconDark />
              <YoutubeIconDark />
              <TwitterIconDark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const IntroSectionWithVideo = () => (
    <div className='introSection container p-4'>
      <h1 className='mb-4'>Let Me Introduce Myself</h1>
      <p className='mb-4'>A Quick video about myself, my achievemets, education, experiences and 
        field I’m interested in
      </p>
      <div className='intro-video-wrapper'>
        <iframe src="https://www.youtube.com/embed/Dy7fc6wbINU" />
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
        <h1>About Me</h1>
        <div className='aboutSection__info__description'>
          <div></div>
          <p>
          Senior Vice Chairman, Director and Head of Cardiac Surgery at Medica Superspecialty Hospital, 
            Dr. Sarkar practices coronary surgery as his pursuance of passion. He is intimately associated with the academic
            activities of European Association for Cardio-Thoracic Surgery(EACTS)  and Indian Association of Cardiovascular and 
            Thoracic Surgeons (IACTS), also Past President-IACTS; he also aspires to bring the South Asian nations together in the 
            South Asian Forum of Cardiothoracic Surgeons. A passionate debater, orator and writer, Dr. Sarkar is the President of the 
            Calcutta Debating Circle (CDC)
            , and chairs the largest live debate in India during Calcutta’s Festival of the Spoken Word’.
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
          <ExperienceCard 
            wrapperStyleClass="card_wrapper" 
            heading='Experience' 
            listItems={['Cardiac electrophysiology','Cardiogeriatrics','Imaging']} 
          />
          <ExperienceCard 
            wrapperStyleClass="card_wrapper" 
            heading='Experience' 
            listItems={['Cardiac electrophysiology','Cardiogeriatrics','Imaging']} 
          />
          <ExperienceCard 
            wrapperStyleClass="card_wrapper" 
            heading='Experience' 
            listItems={['Cardiac electrophysiology','Cardiogeriatrics','Imaging']} 
          />
        </div>
      </div>
    </div>
  );

  const EducationSection = () => (
    <div className='container educationSection'>
      <h1 className='headerWithShadow educationSection__header'>Education<span>Education</span></h1>

      <EducationList 
        itemClass="educationSection__item"
        list={[{instituteName: "Random Medical College", 
          fieldOfStudy: "Random Field of Study", 
          description: "Dummy text lol", 
          startYear: "2009", 
          endYear: "2012"
        },{instituteName: "Random Medical College", 
          fieldOfStudy: "Random Field of Study", 
          description: "Dummy text lol", 
          startYear: "2009", 
          endYear: "2012"
        },{instituteName: "Random Medical College", 
          fieldOfStudy: "Random Field of Study", 
          description: "Dummy text lol", 
          startYear: "2009", 
          endYear: "2012"
        }]} 
      />
    </div>
  );
  

  return (
    <div>
      <ProfileSection />

      <IntroSectionWithVideo />

      <Divider />

      <AboutSection />

      <ExperienceSection />

      <EducationSection />

      <InterestSection 
        header={ <h1 className='headerWithShadow interestSection__header'>Interests<span>Interests</span></h1>} 
        list={["Interest 1", "Intertest 2", "Interest 3","Interest 4"]}
        wrapperClass="interestSection"
      />

      <ConnectSection headerWithShadow />
    </div>
  );
};
export default ProfilePageV1;
