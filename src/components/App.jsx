import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Review from "./Review";
import Home from "./home";
import TeamGrid from "./Team";
function App() {
    return (
        <div>
           <Navbar />
            <Home />
            <TeamGrid />
           <Review />
           <Footer />
        </div>
    );
}
export default App;
