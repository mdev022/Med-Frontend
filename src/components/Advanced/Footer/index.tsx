import Link from 'next/link';
import React from 'react';
import MailIconRed from '../../SvgComponents/MailIconRed';
import MainLogo from '../../SvgComponents/MainLogo';
import PhoneIconRed from '../../SvgComponents/PhoneIconRed';
import styles from "./index.module.scss";

export default function Footer() {
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
          <h3>Legal</h3>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
