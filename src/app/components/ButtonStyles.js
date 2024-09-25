// components/ButtonStyles.js
const baseStyles = "min-w-fit rounded transition duration-200 ease-in-out";

const colorStyles = {
  "primary-solid": "bg-purple-600 text-white active:bg-purple-700 disabled:bg-purple-100",
  "primary-line": "bg-white text-purple-600 border border-purple-600 active:text-purple-700 disabled:text-purple-100 disabled:border-purple-100",
  "secondary-line": "bg-white text-gray-700 border border-gray-300 active:border-gray-350 disabled:border-gray-200 disabled:text-gray-300",
};

const sizeStyles = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-md",
  large: "px-5 py-3 text-lg",
};

export { baseStyles, colorStyles, sizeStyles };
