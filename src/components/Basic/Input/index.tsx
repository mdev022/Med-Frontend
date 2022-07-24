import React from "react";
import ErrorLabel, { ErrorLabelProps } from "../ErrorLabel";
import styles from "./index.module.scss";

interface InputProps {
  placeholder: string;
  value: string | number;
  type: string;
  name: string;
  label?: string | React.ReactNode;
  className?: string;
  onChange: (e: React.ChangeEventHandler<HTMLInputElement> | undefined) => void;
  onBlur: (e: React.ChangeEventHandler<HTMLInputElement> | undefined) => void;
  errorLabelProps?: ErrorLabelProps
}

export default function Input({
  placeholder,
  name,
  value,
  type,
  label,
  className,
  onChange,
  onBlur,
  errorLabelProps
}: InputProps) {
  return (
    <div className={`${className}__container p-2 w-100 ${styles.defaultInputStyles}`}>
      {label && (
        <label className={`${className}__label form-label`}>{label}</label>
      )}
      <input
        onBlur={onBlur}
        type={type}
        className={`${className}__input form-control shadow-sm`}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
      {
        errorLabelProps ? <ErrorLabel {...errorLabelProps} /> : <></>
      }
    </div>
  );
}
