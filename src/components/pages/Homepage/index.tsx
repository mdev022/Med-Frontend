import Image from 'next/image';
import React from 'react';
import PreviewSectionImage from "../../../assets/images/VECTOR.png";
import DoctorImage from "../../../assets/images/docWithPhone.png";
import OfferingImage from "../../../assets/images/offerings.png";
import ProfilePageTemplate1 from "../../../assets/images/template1.png";
import ProfilePageTemplate2 from "../../../assets/images/template2.png";
import MailIconRed from '../../SvgComponents/MailIconRed';
import PhoneIconRed from '../../SvgComponents/PhoneIconRed';
import Head from 'next/head';

export default function HomePage() {

  const PreviewSection = () => (
    <div className='homepage__section1__wrapper'>
      <div className='container homepage__section1'>
        <div className='homepage__section1__col1'>
          <h1>
            Preview
          </h1>
          <p>
          Medinery is a health platform to create a Portfolio of Doctors for better reach and building a strong digital presence.We help Doctors  in building a brand around their contribution in healthcare domain and to promote their work.
We work tirelessly for a better integrated healthcare information system around the world in future and will connect the whole of healthcare under one head.

          </p>
          <p>
        We work tirelessly for a better integrated healthcare system around the world in future and will connect the whole of healthcare under one head.
          </p>
        </div>
        <div className='homepage__section1__col2'>
          <Image src={PreviewSectionImage} />
        </div>
      </div>
    </div>
  );

  const OurProductSection = () => (
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
        At medinery, we work as a social networking platform to improve access to healthcare and create Healthcare awareness,
        hence helping consumers to take better and efficient healthcare decisions.It aims to create a complete ecosystem of 
        Healthcare professionals with consumer driven approach for better understanding of patients and deliver effective healthcare.
          </p>
        </div>
      </div>
    </div>
  );

  const ContactUsSection = () => (
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


  const ReimagineSection = () => (
    <div className='homepage__section4'>
      <div className='container homepage__section4__textContent'>
        <h3>
        Reimagining the future of healthcare through Digitalisation
        </h3>
        <p>
        Medinery is a digital health platform to create a strong accessible network of Healthcare providers for better reach 
        and building a strong digital presence.We help Healthcare providers in building a brand around their contribution in healthcare 
        domain and to create a portfolio.
        </p>
        <p>
        We work tirelessly for a better integrated healthcare system around the world in future and will connect the whole of healthcare under one head.
        </p>
      </div>
    </div>
  );

  const WebForDocSection = () => (
    <div className='container homepage__section5'>
      <div className='homepage__section5__col1'>
        <h1>
        Web 2.0 for Doctors
        </h1>
        <p>
        Doctors can create online presence on their own and can manage profiles of their own.They can showcase their skills interests and their work to enhance their healthcare practice.
        </p>
        {/* <p>
        We work tirelessly for a better integrated healthcare system around the world in future and will connect the whole of healthcare under one head.
        </p> */}
      </div>
      <div className='homepage__section5__col2'>
        <Image src={DoctorImage} />
      </div>
    </div>
  );
  const FeaturesAndOfferings = () => (
    <div className='homepage__section6__wrapper'>
      <div className='container homepage__section2'>
        <div className='homepage__section6__col1'>
          <h1>
            Our Features/Offerings
          </h1>
          <div>
            <ul className='homepage__section6__list_ul'>
              <li> Smart Portfolio management</li>
              <li> Digital Branding</li>
              <li> Easy to connect</li>
              <li> Exclusive Designed Templates</li>
              <li> Profile sharing</li>
              <li> Instant launch</li>
              <li> SEO optimised pages</li>
            </ul>
          </div>
          <p>
           We work tirelessly for a better integrated healthcare system around the world in future and will connect the whole of healthcare under one head.
          </p>
        </div>
        <div className='homepage__section6__col2'>
          <Image src={OfferingImage} />
        </div>
      </div>
    </div>
  );

  const HeadTagData = () => (
    <Head>
      <title>Medinery | A platform for doctors to showcase themselves</title>
      <meta name="og:title" content="Medinery | A platform for doctors to showcase themselves"/>
      <meta name="og:url" content="https://www.medinery.com"/>
      <meta name="description" content="Medinery - A platform for doctors to showcase themselves and create a digital presence through our portfolio service."/>
      <meta name="og:description" content="Medinery - A platform for doctors to showcase themselves and create a digital presence through our portfolio service."/>
    </Head>
  );
  return (
    <>
      <HeadTagData />

 
      <PreviewSection />
      <OurProductSection />


      <FeaturesAndOfferings />
      <WebForDocSection />
 

      {/* <ContactUsSection /> */}
      <ReimagineSection />
    </>
  );
}
