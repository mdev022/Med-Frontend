import React from "react";

interface InputProps {
  placeholder: string;
  value: string | number;
  type: string;
  name: string;
  label?: string | React.ReactNode;
  className?: string;
  onChange: (e: React.ChangeEventHandler<HTMLInputElement> | undefined) => void;
}

export default function Input({
  placeholder,
  name,
  value,
  type,
  label,
  className,
  onChange,
}: InputProps) {
  return (
    <div className={`${className}__container mb-3 p-2 w-100`}>
      {label && (
        <label className={`${className}__label form-label`}>{label}</label>
      )}
      <input
        type={type}
        className={`${className}__input form-control`}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
