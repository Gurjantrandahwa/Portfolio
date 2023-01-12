import './App.css';
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Projects/Project";


function App() {
    return <div className={"app"}>

        <Header id={"hero"}/>

        <section className={"snap-start"}>
            <HeroSection id={"home"}/>
        </section>

        <section className={"snap-center"}>
            <About id={"about"}/>
        </section>

        <section id={"skills"} className={"snap-start"}>
            <Skills/>
        </section>
        <section id={"skills"} className={"snap-start"}>
            <Project/>
        </section>

        <section className={"snap-start"}>
            <Contact/>
        </section>

    </div>

}

export default App;
