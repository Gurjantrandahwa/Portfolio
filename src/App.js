import './App.css';
import Home from "./Components/Home/Home";
import {Container} from "react-bootstrap";
import Sidebar from "./Components/Sidebar/Sidebar";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
    return <div>
        <Container>
            <Home/>
            <Sidebar/>
            <Gallery/>
            <About/>
            <Contact/>
        </Container>
    </div>

}

export default App;
