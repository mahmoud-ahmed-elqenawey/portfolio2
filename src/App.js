import logo from "./logo.svg";
import Appbar from "./components/Appbar/Appbar";
import Header from "./components/Header/Header";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <div className="App">
            <Appbar />
            <Container>
                <Header />
                <About />
                <Work />
                <Skills />
                <Projects />
            </Container>
        </div>
    );
}

export default App;
