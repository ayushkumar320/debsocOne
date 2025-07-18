import React, {useRef} from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Review from "./Review";
import Home from "./home";
import TeamGrid from "./Team";
import Quote from "./Quote";
import AchievementsCarousel from "./AchievementsCarousel";
import {ReactLenis, useLenis} from "@studio-freight/react-lenis";

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: true,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <div>
        <Navbar />
        <Home />
        <TeamGrid />
        <Quote />
        <AchievementsCarousel />
        <Review />
        <Footer />
      </div>
    </ReactLenis>
  );
}
export default App;
