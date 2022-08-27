import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Basic/Layout/Layout';
import MailIconRed from '../../components/SvgComponents/MailIconRed';
import PhoneIconRed from '../../components/SvgComponents/PhoneIconRed';

export default function About() {

  const PageHeader = () => {
    return(
      <div className='contactPage__pageheader'>
        <h1>
        Contact Us
        </h1>
      </div>
    );
  };

  const ContentSection = () => {
    return (
      <div className='contactPage__content__wrapper container'>
        <div className=' contactPage__content__card1'>
          <h1>Reach Us Out</h1>
          <p>Connect with us if you have queries regarding our platform, the services we provide, want to collaborate with us or any other relevant requirement.</p>
          <div>
            <h5><PhoneIconRed />Phone: <span>+918335916762 /+917602022864</span></h5>
            <h5><MailIconRed />Email: <span>medinery2021@gmail.com</span></h5>
          </div>
        </div>
        {/* <div className=' contactPage__content__card2'>
          <h1>Drop A Message</h1>
          <p>
          Improving the access to quality care through digitalization of Healthcare.Our mission is 
          to connect all the stakeholders of healthcare for better collaborative outcomes in healthcare.
          </p>
        </div> */}

      </div>
    );
  };


  return (
    <Layout>
      <PageHeader />
      <ContentSection />
    </Layout>
  );
}
