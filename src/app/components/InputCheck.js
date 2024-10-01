"use client";

import { useFormContext } from 'react-hook-form';

export const InputCheck = ({
  name,
  label = "",
  labelStyle = "ml-2 cursor-pointer text-gray-500 peer-checked:text-black",
  inputStyle = "square",
  id,
  required_message = "",
  isSelectAll = false,
  value,
  selectArr = [],
}) => {
  const { register, setValue, formState: { errors } } = useFormContext();

  let styleClasses;

  // Tailwind CSS를 사용한 체크박스 스타일 설정
  switch (inputStyle) {
    case "round":
      styleClasses =
        "h-6 w-6 bg-white rounded-full border-2 border-gray-300 checked:bg-purple-600 checked:border-purple-600 peer focus:ring-2 focus:ring-purple-500 transition";
      break;

    case "simple":
      styleClasses =
        "h-4 w-4 bg-transparent border-gray-300 checked:border-purple-600 peer focus:ring-2 focus:ring-purple-500 transition";
      break;

    case "square":
    default:
      styleClasses =
        "h-4 w-4 bg-white border-2 border-gray-300 rounded checked:bg-purple-600 checked:border-purple-600 peer focus:ring-2 focus:ring-purple-500 transition";
      break;
  }

  // 전체 선택 기능을 위한 함수
  const handleSelectAllChange = (target, e) => {
    target.forEach((elementName) => {
      const elements = document.getElementsByName(elementName);
      if (elements.length > 0) {
        elements[0].checked = e.target.checked;
        setValue(elementName, e.target.checked);
      }
    });
  };

  return (
    <div className="flex items-center">
      {isSelectAll ? (
        <input
          type="checkbox"
          name={name}
          {...register(`${name}`, { required: required_message })}
          id={id}
          className={styleClasses}
          value={value}
          onChange={(e) => handleSelectAllChange(selectArr, e)}
        />
      ) : (
        <input
          type="checkbox"
          name={name}
          {...register(`${name}`, { required: required_message })}
          id={id}
          className={styleClasses}
          value={value}
        />
      )}
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
};
