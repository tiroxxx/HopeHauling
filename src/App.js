import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/Navbar"
import TractorDumpster from "./images/tractor-dumpster.jpg"
import { Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Image src={TractorDumpster} fluid />
    </div>
  );
}

export default App;
