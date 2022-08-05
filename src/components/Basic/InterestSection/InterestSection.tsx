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
          {list.map(item=> (
            <span className={`${wrapperClass}__item ${styles.item}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
