"use client";

import React from 'react';

export const BaseButton = ({
  name = "",
  label = "",
  id = "",
  buttonUseFn = () => {},
  color = "primary-solid", // 기본 값 설정
  className = "",
}) => {
  // 기본 클래스 설정
  let defaultClass = "min-w-fit rounded transition duration-200 ease-in-out";

  // 색상에 따른 Tailwind 클래스 설정
  switch (color) {
    case "primary-solid":
      defaultClass += " bg-purple-600 text-white active:bg-purple-700 disabled:bg-purple-100";
      break;
    case "primary-line":
      defaultClass += " bg-white text-purple-600 border border-purple-600 active:text-purple-700 disabled:text-purple-100 disabled:border-purple-100";
      break;
    case "secondary-line":
      defaultClass += " bg-white text-gray-700 border border-gray-300 active:border-gray-350 disabled:border-gray-200 disabled:text-gray-300";
      break;
    default:
      break;
  }

  return (
    <button
      className={`${defaultClass} ${className}`}
      name={name}
      id={id}
      onClick={buttonUseFn}
      type="button"
    >
      {label}
    </button>
  );
};
