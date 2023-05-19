import React from 'react';

const CustomInput = (props) => {
  const {
    type,
    name,
    placeholder,
    className,
    value,
    onChange,
    onBlur,
    diabled,
  } = props;
  return (
    <div className="input">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={diabled}
      />
    </div>
  );
};

export default CustomInput;
