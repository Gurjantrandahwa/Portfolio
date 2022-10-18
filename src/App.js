import './App.css';
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Projects/Project";


function App() {
    return <div className={"app"}>

        <Header id={"hero"}/>

        <section className={"snap-start"}>
            <Landing id={"home"}/>
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
