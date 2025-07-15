import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Review from "./Review";
import Home from "./home";
import TeamGrid from "./Team";
import Quote from "./Quote";
import AchievementsCarousel from "./AchievementsCarousel";
function App() {
    return (
        <div>
           <Navbar />
            <Home />
            <TeamGrid />
            <Quote/>
            <AchievementsCarousel />
           <Review />
           <Footer />
        </div>
    );
}
export default App;
