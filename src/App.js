import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/Navbar"
import TractorDumpster from "./images/tractor-dumpster.jpg"
import FormComponent from './components/Form';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div id="jumbotron">
        <img id="landing-picture" src={TractorDumpster} alt="Hauling" />
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
