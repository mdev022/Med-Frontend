import React from 'react';
import RightArrow from '../../SvgComponents/RightArrow';
import styles from "./index.module.scss";

interface IExperienceCardProps {
    heading: string;
    listItems: string[];
    wrapperStyleClass?:string;
    listWrapperClass?:string;
}
export default function ExperienceCard({heading,listItems, wrapperStyleClass, listWrapperClass}: IExperienceCardProps) {
  return (
    <div className={`${wrapperStyleClass}  ${styles.wrapper}`}>
      {heading && <h5>{heading}</h5>}
      <div className={`${listWrapperClass} ${styles.listWrapper}`}>
        {listItems.map((item,index)=> (
          <div key={index.toString()} className={styles.listItem}> <RightArrow /> <span>{item}</span> </div>
        ))}
      </div>
    </div>
  );
}
