import React from 'react';
import styles from "./index.module.scss";

interface InterestSectionProps{
    list: string[];
    header: React.ReactNode | string;
    wrapperClass?: string;
  }

export default function InterestSection({list,wrapperClass,header}:InterestSectionProps) {
  return (
    <div className={`${wrapperClass}`}>
      <div className={`container  ${styles.wrapper}`}>
        <div>{header}</div>
        <div className={`${styles.listWrapper}`}>
          {list && Array.isArray(list) && list.map((item,index)=> (
            <span key={index.toString()} className={`${wrapperClass}__item ${styles.item}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
