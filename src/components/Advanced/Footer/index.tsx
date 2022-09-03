import Link from 'next/link';
import React, { useState } from 'react';
import AxiosApi from '../../../config/apiAxios';
import apiOptions, { SUBSCRIBE_WITH_EMAIL } from '../../../config/endpoints';
import MailIconRed from '../../SvgComponents/MailIconRed';
import MainLogo from '../../SvgComponents/MainLogo';
import PhoneIconRed from '../../SvgComponents/PhoneIconRed';
import styles from "./index.module.scss";

export default function Footer() {
  const [email,setEmail] = useState<string>("");
  const [submitting,setSubmitting] = useState<boolean>(false);
  const handleEmailSubmit = async () => {
    setSubmitting(true);
    try{
      const res = await AxiosApi({...apiOptions(SUBSCRIBE_WITH_EMAIL), data:{email:email}});
      
    }catch(err){
      console.log(err);
    }finally{
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.footerContainer}>
      <div className='container'>
        <div className={styles.footerCol1}>
          <div>
            <MainLogo />
            <h1>Medinery</h1>
          </div>
          <p>
            A platform for doctors to showcase their own selves and create a digital presence.
          </p>
        </div>
        <div className={styles.footerCol2}>
          <h3>Reach Us</h3>
          <p>Please contact below details for any other information.</p>
          <div>
            <span><MailIconRed />  medinery2020@gmail.com</span>
          </div>
          <div>
            <span><PhoneIconRed />  +917602022864</span>
          </div>
        </div>
        <div className={styles.footerCol3}>
          <h3>Stay Connected</h3>
          <p>Drop your mail if you are interested in our services and would like to get updates and not miss out anything</p>
          <div className={styles.mailInputWrapper}>
            <input className={styles.mailInput} 
              placeholder="Drop your mail here" 
              type="email" 
              value={email} 
              onChange={(e)=> setEmail(e.target.value)}
            />
            {
              submitting ? <div className="spinner-border text-success" role="status"></div> 
                : <button onClick={handleEmailSubmit}>Submit</button>
            }
          </div>
          {/* <div>
            <Link href="/">
              Terms and conditions
            </Link>
          </div>
          <div>
            <Link href="/">
              Refund Policy
            </Link>
          </div>
          <div>
            <Link href="/">
              Information privacy.
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
