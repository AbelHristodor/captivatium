import MyNav from './components/Nav/MyNav';
import Footer from './components/Footer/Footer';
import GalleryPage from "./components/Gallery/GalleryPage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import './App.scss';


function App() {
  return (
    <Router className="App">
      <MyNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
