import React from "react";
import "./Home.css";
import Header from "./Header/Header.js"
import Content from "./Content/Content.js";
import Footer from "./Footer/Footer.js";

const Home = () =>{
    return(
            <div className="home">
                <div className="preloader">
                </div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )

}

export default Home;