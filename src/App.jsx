
import './App.css'
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Testimonials from "./components/Testimonials.jsx";

function App() {


  return (
    <>
        {/*<Loader />*/}
        <Navbar />
        <main>
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
        </main>
        <Footer />

    </>
  )
}

export default App
