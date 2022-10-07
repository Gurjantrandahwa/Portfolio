import './App.css';
import Home from "./Components/Home/Home";
import {Container} from "react-bootstrap";
import Sidebar from "./Components/Sidebar/Sidebar";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
    return <div  className={"app"}>
        <Container fluid>
            <Sidebar/>
            <Home/>
            <div>
                <Gallery/>
                <About/>
                <Contact/>
                <Footer/>
            </div>

        </Container>
    </div>

}

export default App;
