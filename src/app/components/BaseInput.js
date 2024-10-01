"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

export const BaseInput = ({
  name = "",
  label = "",
  required_message = null,
  success_message = null,
  custom_success_message = null,
  type = "text",
  placeholder = "",
  minLength = null,
  maxLength = null,
  min = null,
  max = null,
  pattern = null,
  pattern_message = null,
  disabled = false,
  value = undefined,
  id = undefined,
  validate = () => { },
}) => {
  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext();

  let patternVal;

  // 패턴에 따른 정규식 설정
  switch (pattern) {
    case "ko":
      patternVal = /^[가-힣]+$/;
      break;
    case "num":
      patternVal = /^[0-9]+$/;
      break;
    case "email":
      patternVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      break;
    case "koEnNumSp":
      patternVal = /^[a-zA-Z가-힣0-9!@#$%^&*()-_+=<>?/,.:;{}|~`]+$/;
      break;
    case "enNum_":
      patternVal = /^[a-zA-Z0-9_]+$/;
      break;
    case "koEnNum":
      patternVal = /^[a-zA-Z가-힣0-9]+$/;
      break;
    case "enNum":
      patternVal = /^[a-zA-Z0-9]+$/;
      break;
    case "koEn":
      patternVal = /^[a-zA-Z가-힣]+$/;
      break;
    case "en":
      patternVal = /^[a-zA-Z]+$/;
      break;
    default:
      patternVal = null;
  }

  const errorMessage = errors[name]?.message;

  return (
    <div className={type === "hidden" ? "hidden" : "w-full"}>
      <div className="relative mb-2 w-full">
        {label && (
          <label htmlFor={id} className="block mb-2 text-gray-700">
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={value}
          {...register(name, {
            required: required_message,
            minLength: minLength ? { value: minLength, message: `${minLength}자 이상 입력해주세요` } : null,
            maxLength: maxLength ? { value: maxLength, message: `${maxLength}자 이하 입력해주세요` } : null,
            min: min ? { value: min, message: `${min} 이상 입력해주세요` } : null,
            max: max ? { value: max, message: `${max} 이하 입력해주세요` } : null,
            pattern: patternVal ? { value: patternVal, message: pattern_message } : null,
            validate: validate,
          })}
          className={`w-full p-3 border rounded ${errors[name] ? "border-red-500" : isSubmitted && !errors[name] ? "border-green-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-purple-600`}
        />
        {errors[name] && (
          <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
        )}
        {!errors[name] && isSubmitted && custom_success_message && (
          <p className="mt-2 text-sm text-green-500">{custom_success_message}</p>
        )}
        {!errors[name] && isSubmitted && success_message && (
          <p className="mt-2 text-sm text-green-500">{success_message}</p>
        )}
      </div>
    </div>
  );
};
