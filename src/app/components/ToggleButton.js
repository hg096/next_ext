"use client";

import React from 'react';

function ToggleButton({ isChecked, onToggle }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={onToggle}
      />
      <div
        className={`w-11 h-6 rounded-full transition-colors duration-300 ${
          isChecked ? 'bg-green-500' : 'bg-gray-300'
        } peer-focus:ring-2 peer-focus:ring-green-500`}
      >
        <div
          className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform duration-300 ${
            isChecked ? 'transform translate-x-5' : ''
          }`}
        ></div>
      </div>
    </label>
  );
}

export default ToggleButton;
