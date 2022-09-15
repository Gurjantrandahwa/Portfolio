import './App.css';
import Home from "./Components/Home/Home";
import {Container} from "react-bootstrap";
import Sidebar from "./Components/Sidebar/Sidebar";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
    return <div>
        <Container fluid>
            <Sidebar/>
            <Home/>


                <Gallery/>
<div className={"app"}>
    <About />
</div>


            <Contact/>
            <Footer/>
        </Container>
    </div>

}

export default App;
