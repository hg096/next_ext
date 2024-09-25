// components/Input.js
import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

const Input = ({
  name,
  type = "text",
  placeholder,
  validate,
  minLength,
  maxLength,
  min,
  max,
  patternVal,
  patternMessage,
  requiredMessage,
  disabled,
  value,
  id,
}) => {
  const {
    register,
    formState: { errors, isSubmitted, isSubmitting },
  } = useFormContext();

  return (
    <input
      type={type}
      name={name}
      {...register(name, {
        required: requiredMessage,
        minLength: { value: minLength, message: `${minLength}자 이상 입력해주세요` },
        maxLength: { value: maxLength, message: `${maxLength}자 이하 입력해주세요` },
        min: { value: min, message: `${min} 이상 입력해주세요` },
        max: { value: max, message: `${max} 이하 입력해주세요` },
        pattern: { value: patternVal, message: patternMessage },
        validate: isSubmitting ? (value) => validate() : null,
      })}
      className={`${
        errors[name]
          ? "border border-red-500"
          : isSubmitted
          ? "border border-green-500"
          : ""
      } text-md h-12 w-full rounded-md border-[1px] border-gray-250 py-3 pl-3 pr-9 text-b-1 text-gray-700 transition duration-100 ease-linear placeholder:text-gray-400 focus:border-purple-600`}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      id={id}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  patternVal: PropTypes.string,
  patternMessage: PropTypes.string,
  requiredMessage: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
};

export default Input;
