// components/ValidationMessage.js
import React from "react";
import PropTypes from "prop-types";

const ValidationMessage = ({ message, type }) => {
  if (!message) return null;

  const messageType = type === "error" ? "text-red-500" : "text-green-500";

  return (
    <p className={`mt-[6px] mb-[6px] text-c-2 ${messageType}`}>
      {message}
    </p>
  );
};

ValidationMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(["error", "success"]),
};

export default ValidationMessage;
