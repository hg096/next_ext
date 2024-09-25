// components/BaseInput.js
import React from "react";
import Label from "./Label";
import Input from "./Inputs";
import ValidationMessage from "./ValidationMessage";
import { useFormContext } from "react-hook-form";

export const BaseInput = ({
  name,
  label,
  requiredMessage,
  successMessage,
  customSuccessMessage,
  type = "text",
  placeholder,
  minLength,
  maxLength,
  min,
  max,
  pattern,
  patternMessage,
  disabled,
  value,
  id,
  validate = () => {},
}) => {
  const { formState } = useFormContext();
  const { errors, isSubmitted } = formState;

  let patternVal;
  switch (pattern) {
    case "ko":
      patternVal = /^[가-힣]+$/;
      break;
    case "num":
      patternVal = /^[0-9]+$/;
      break;
    case "email":
      patternVal = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)+$/;
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
      break;
  }

  let errorsMessage = errors[name]?.message;

  return (
    <div className={type === "hidden" ? "hidden" : "w-full"}>
      <div className="relative rounded mb-2 text-black w-full min-h-[48px]">
        <Label htmlFor={id} text={label} />
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          max={max}
          patternVal={patternVal}
          patternMessage={patternMessage}
          requiredMessage={requiredMessage}
          validate={validate}
          disabled={disabled}
          value={value}
          id={id}
        />
      </div>
      <ValidationMessage
        message={
          errorsMessage ||
          (customSuccessMessage && !errors[name]
            ? customSuccessMessage
            : successMessage)
        }
        type={errors[name] ? "error" : "success"}
      />
    </div>
  );
};
