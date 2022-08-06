import Image from 'next/image';
import React from 'react';
import BigImage from "../../../assets/images/VECTOR.png";
import ProfilePageTemplate1 from "../../../assets/images/template1.png";
import ProfilePageTemplate2 from "../../../assets/images/template2.png";
import MailIconRed from '../../SvgComponents/MailIconRed';
import PhoneIconRed from '../../SvgComponents/PhoneIconRed';

export default function HomePage() {

  const FirstSection = () => (
    <div className='container homepage__section1'>
      <div className='homepage__section1__col1'>
        <h1>
            Medinery- A Preview
        </h1>
        <p>
        Medinery is a social networking platform to improve access to healthcare and create Healthcare awareness,
        hence helping consumers to take better and efficient healthcare decisions.It aims to create a complete ecosystem of 
        Healthcare professionals with consumer driven approach for better understanding of patients and deliver effective healthcare.
        </p>
        <p>
        Our Company work tirelessly for a better 
        integrated healthcare system around the world in future and will connect the whole of healthcare under one head.
        </p>
      </div>
      <div className='homepage__section1__col2'>
        <Image src={BigImage} />
      </div>
    </div>
  );

  const SecondSection = () => (
    <div className='homepage__section2__wrapper'>
      <div className='container homepage__section2'>
        <div className='homepage__section2__col1'>
          <div className='template_image_1'>
            <Image src={ProfilePageTemplate1} />
          </div>
          <div className='template_image_2'>
            <Image src={ProfilePageTemplate2} />
          </div>
        </div>
        <div className='homepage__section2__col2'>
          <h1>Our Product</h1>
          <p>
        Medinery is a social networking platform to improve access to healthcare and create Healthcare awareness,
        hence helping consumers to take better and efficient healthcare decisions.It aims to create a complete ecosystem of 
        Healthcare professionals with consumer driven approach for better understanding of patients and deliver effective healthcare.
          </p>
        </div>
      </div>
    </div>
  );

  const ThirdSection = () => (
    <div className=' homepage__section3__wrapper'>
      <h1>Contact Us</h1>
      <div className='container homepage__section3'>
        <div className='homepage__section3__col'>
          <h3>Drop a mail</h3>
          <div>
            <MailIconRed />
            <span>medinery2020@gmail.com</span>
          </div>
        </div>
        <div className='homepage__section3__col'>
          <h3>Phone</h3>
          <div><PhoneIconRed />  <span>+917602022864</span></div>
          {/* <div><PhoneIconRed />  </div> */}
        </div>
      </div>
    </div>
  );
  return (
    <>
      <FirstSection />

      <SecondSection />

      <ThirdSection />
    </>
  );
}
