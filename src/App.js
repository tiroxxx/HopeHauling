import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/Navbar"
import JumbotronComponent from "./components/Jumbotron"
import FormComponent from './components/Form';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <JumbotronComponent />
      <About />
      <FormComponent />
      <Footer />
    </div>
  );
}

export default App;
