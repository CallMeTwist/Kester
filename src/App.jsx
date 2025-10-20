
import './App.css'
import Loader from "./components/Loader.jsx";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    useEffect(() => {
        // This forces jQuery + plugin scripts to re-run
        if (window.$) {
            window.$(document).ready(function () {
                if (window.initThemeScripts) {
                    window.initThemeScripts(); // (we’ll create this next)
                }
            });
        }
    }, []);


  return (
    <>
        {/*<Loader />*/}
        <div className="loader-wrap">
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path
                    id="svg"
                    d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
                ></path>
            </svg>

            <div className="loader-wrap-heading">
                <div className="load-text">
                    <span>L</span>
                    <span>o</span>
                    <span>a</span>
                    <span>d</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                </div>
            </div>
        </div>

        <div className="cursor"></div>

        <div className="progress-wrap cursor-pointer">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
        <Navbar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
        <Footer />

    </>
  )
}

export default App
