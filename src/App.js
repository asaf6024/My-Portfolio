import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Websites from './pages/Websites/Websites'
import Skiils from './pages/Skills/Skills';
function App() {
  return (
    <div className='container-fluid'>
      <Router>

        <Nav />
        {/* <Router> */}
        <Switch>
          {/* דפי מידע */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/websites" component={Websites} />
          <Route exact path="/skills" component={Skiils} />


        </Switch>
        {/* </Router> */}
        {/* <Footer /> */}
        {/* <NavigationBtn /> */}


      </Router>


    </div>
  );
}

export default App;
