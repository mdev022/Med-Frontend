import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Basic/Layout/Layout';
import ProfilePageTemplate1 from "../../assets/images/template1.png";
import ProfilePageTemplate2 from "../../assets/images/template2.png";

export default function About() {

  const PageHeader = () => {
    return(
      <div className='aboutpage__pageheader'>
        <h1>
        About Us
        </h1>
      </div>
    );
  };

  const MissionSection = () => {
    return (
      <div className='missionSection__wrapper'>
        <div className='container missionSection__content'>
          <h1>Mission/Vision</h1>
          <p>
          Improving the access to quality care through digitalization of Healthcare.Our mission is 
          to connect all the stakeholders of healthcare for better collaborative outcomes in healthcare.
          </p>
        </div>

      </div>
    );
  };

  const WhatWeOffer = () => {
    return (
      <div className='whatweoffer__wrapper'>
        <div className='container whatweoffer__content'>
          <h1>What We Offer</h1>
          <p>
          We offer digital support and reach to Doctors and other healthcare professionals through our platform.
          </p>
          <div>
            <div className='whatweoffer__imageWrapper'>
              <div className='template_image_1'>
                <Image src={ProfilePageTemplate1} />
              </div>
              <div className='template_image_2'>
                <Image src={ProfilePageTemplate2} />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };

  const HowWeWork = () => {
    return (
      <div className='howWeWork__wrapper'>
        <div className='container howWeWork__content'>
          <h1>How We Work</h1>
          <p>
          We provide healthcare providers a platform where they can create a profile as per their convenience and choice.
          We make healthcare providers our members an
          d establish a trusted relationship for strong collaboration to provide better health outcomes.
          </p>
        </div>

      </div>
    );
  };

  const WhoWeAre = () => {
    return (
      <div className='whoWeAre__wrapper'>
        <div className='container whoWeAre__content'>
          <h1>Who We Are</h1>
          <p>
            Introducing the cofounders
          </p>
          <div className='whoWeAre__cofounders'>
            <div className='whoWeAre__cofounders__imageCard'>
              <img src="https://medinery-bucket.s3.ap-south-1.amazonaws.com/Rectangle+26+Cropped.png" />
              <h3>Anish Maitra</h3>
              <p>Co-Founder / Management Lead</p>
            </div>
            <div className='whoWeAre__cofounders__imageCard'>
              <img src="https://medinery-bucket.s3.ap-south-1.amazonaws.com/Rectangle+26+Cropped.png" />
              <h3>Koustav Gandhi</h3>
              <p>Co-Founder / Development Lead</p>
            </div>
          </div>
        </div>

      </div>
    );
  };
  return (
    <Layout>
      <PageHeader />
      <MissionSection />
      {/* <hr /> */}
      <WhatWeOffer />
      <hr />
      <HowWeWork />
      {/* <hr /> */}
      <WhoWeAre />
    </Layout>
  );
}
