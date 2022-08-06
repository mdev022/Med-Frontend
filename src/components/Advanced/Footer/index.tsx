import React from 'react';
import MainLogo from '../../SvgComponents/MainLogo';
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
        </div>
        <div className={styles.footerCol2}>
            

        </div>
        <div className={styles.footerCol3}>

        </div>
      </div>
    </div>
  );
}
