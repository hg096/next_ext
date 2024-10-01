"use client";

import React, { useState, useEffect } from 'react';

export const Switch = ({
  name = "",
  label = "",
  id = "",
  switchUseFn = () => {},
  isDefault = false,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(isDefault);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // 스위치 토글 함수
  const toggleSwitch = () => {
    setIsSwitchOn((prevState) => !prevState);
    setIsFirstRender(false); // 첫 렌더링 이후로만 switchUseFn 실행
  };

  // 스위치 상태가 변경될 때 switchUseFn 실행
  useEffect(() => {
    if (!isFirstRender && typeof switchUseFn === "function") {
      switchUseFn(isSwitchOn);
    }
  }, [isSwitchOn, isFirstRender, switchUseFn]);

  return (
    <div className="flex items-center">
      <label className="relative inline-block w-9 h-5">
        <input
          type="checkbox"
          className="hidden"
          name={name}
          id={id}
          checked={isSwitchOn}
          onChange={toggleSwitch}
        />
        {/* 스위치 백그라운드 */}
        <div
          className={`w-full h-full rounded-full transition-colors duration-300 ${
            isSwitchOn ? "bg-green-500" : "bg-gray-300"
          }`}
        ></div>
        {/* 스위치 버튼 */}
        <div
          className={`absolute top-[2px] w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${
            isSwitchOn ? "translate-x-4" : "translate-x-0"
          }`}
        ></div>
      </label>
      {label && (
        <label htmlFor={id} className="ml-2 cursor-pointer text-gray-500">
          {label}
        </label>
      )}
    </div>
  );
};
