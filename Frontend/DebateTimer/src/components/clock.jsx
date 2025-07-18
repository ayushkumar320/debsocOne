import React from "react";

function Clock(props){
  return (
    <div className="text-2xl font-bold text-center mt-4">
      <span>{props.time}</span>
    </div>
  );
}
export default Clock;