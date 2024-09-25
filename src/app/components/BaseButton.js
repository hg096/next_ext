// components/BaseButton.js
"use client";

import React from 'react';
import PropTypes from 'prop-types';
import { baseStyles, colorStyles, sizeStyles } from './ButtonStyles';

export const BaseButton = ({
  name = "",
  label = "",
  id = "",
  buttonUseFn = () => {},
  color = "primary-solid",
  size = "medium",
  className = "",
  disabled = false,
}) => {
  // 기본 스타일과 색상, 크기 스타일을 조합하여 최종 클래스 이름 생성
  const combinedClassName = `${baseStyles} ${colorStyles[color]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      className={combinedClassName}
      name={name}
      id={id}
      onClick={buttonUseFn}
      type="button"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// PropTypes를 이용한 타입 검증
BaseButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  buttonUseFn: PropTypes.func,
  color: PropTypes.oneOf(["primary-solid", "primary-line", "secondary-line"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
