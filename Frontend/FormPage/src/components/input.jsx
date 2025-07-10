import React from "react";

function Input({ type = "text", placeholder = "", ...rest }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-72 rounded-md border border-orange-500 bg-transparent px-3 py-2 text-orange-100 placeholder-orange-300 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
      {...rest}
    />
  );
}

export default Input;
