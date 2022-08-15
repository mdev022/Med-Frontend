import React from 'react';
import styles from "./index.module.scss";

interface EducationItemProps{
  instituteName: string;
  fieldOfStudy: string;
  description?: string;
  startYear: string;
  endYear: string;

}
interface IEducationListProps{
  list: EducationItemProps[];
  itemClass?: string;
}

export default function EducationList({list,itemClass}: IEducationListProps) {
  return (
    <div className={styles.wrapper}>
      {list && Array.isArray(list) && 
        list.map((listItem,index)=> (
          <div key={`${listItem.description}- ${index}`} className={`${styles.item} ${itemClass}`}>
            <div>
              <div className={`${itemClass}__namedate`}>
                <span className={`${styles.instituteName} ${itemClass}__name`}>
                  {listItem?.instituteName}
                </span>
                <span className={`${styles.description} ${itemClass}__date`}>{listItem?.startYear} - {listItem?.endYear}</span>
              </div>
              <span className={`${styles.fieldOfStudy} ${itemClass}__study`}>
                {listItem?.fieldOfStudy}
              </span>
              <span className={`${styles.description} ${itemClass}__description`}>
                {listItem?.description}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

