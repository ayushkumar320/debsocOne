import React from "react";
import Motion from "./Motion"
import MotionsArticle from "./MotionT";
import UniversityDebate from "./UniversityDebate";

function App() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black ">
      <UniversityDebate />
    <MotionsArticle />
     <Motion />
   </div>
  );
}

export default App;
