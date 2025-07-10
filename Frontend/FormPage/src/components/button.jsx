import React from "react";

function Button({ label = "Submit", ...rest }) {
  return (
    <button
      className="mt-2 w-72 rounded-md bg-orange-500 px-4 py-2 font-medium text-black transition-transform hover:scale-105 hover:bg-orange-400 active:scale-95"
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;
