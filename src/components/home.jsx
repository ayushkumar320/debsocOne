import React from "react";

function Home() {
  return (
    <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">

      <img
        src="./media/M5.jpg"
        alt="group photo"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <h1 className="animate-fadeUp text-4xl md:text-7xl font-extrabold text-orange-500 border-orange-500 px-4 text-decoration-none">
          SMVIT DEBSOC
        </h1>
      </div>
    </div>
  );
}

export default Home;
