import React from "react";

function Button(props) {
  return (
    
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
      {props.text} 
    </button>
  );
}

export default Button;

