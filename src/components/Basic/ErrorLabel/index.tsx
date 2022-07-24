import React from 'react';
import styles from "./index.module.scss";

export interface ErrorLabelProps {
    message: string | undefined;
    color?:string;
    customStyle?:string
}
export default function ErrorLabel({message,customStyle}: ErrorLabelProps) {
  return message ? (
    <div className={styles.errorLabelWrapper}>
      <span className={`${customStyle} ${styles.errorLabel}`}>
        {message}
      </span>
    </div>
  ): <></>;
}
