import './App.css';
import Home from "./Components/Home/Home";
import {Container} from "react-bootstrap";
import Sidebar from "./Components/Sidebar/Sidebar";
function App() {
    return   <Container>
        <Sidebar/>
        <Home/>
    </Container>

}

export default App;
