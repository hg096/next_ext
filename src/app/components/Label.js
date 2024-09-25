// components/Label.js
import React from "react";
import PropTypes from "prop-types";

const Label = ({ htmlFor, text }) => {
  if (!text) return null; // 라벨이 없으면 렌더링하지 않음
  return (
    <label htmlFor={htmlFor} className="mb-[6px] block text-t-3 min-w-max">
      {text}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string,
};

export default Label;
