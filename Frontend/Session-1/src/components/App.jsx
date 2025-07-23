import React from "react";
import Motion from "./Motion";
import MotionsArticle from "./MotionT";
import UniversityDebate from "./UniversityDebate";
import MotionArticle2 from "./MotionT1";
import MotionsArticle3 from "./Motion2";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Motion />
      <UniversityDebate />
      <MotionsArticle />
      <MotionArticle2 />
      <MotionsArticle3 />
    </div>
  );
}

export default App;
