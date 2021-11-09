import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Navbar from './components/Navbar'
import './App.css';
import Works from "./components/Works";
import Contact from "./components/Contact";
import Comments from "./components/Comments";
function App() {
  return (
    <Router>
      <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/works" component={Works}></Route>
        <Route exact path="/comments" component={Comments}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
