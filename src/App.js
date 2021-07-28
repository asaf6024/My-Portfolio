import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import Experience from './pages/Experience/Experience'
import Websites from './pages/Websites/Websites'
import Skiils from './pages/Skills/Skills';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='container-fluid'>
      <Router>

        <Nav />
        {/* <Router> */}
        <Switch>
          {/* דפי מידע */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Experience} />
          <Route exact path="/websites" component={Websites} />
          <Route exact path="/skills" component={Skiils} />


        </Switch>
        {/* </Router> */}
        <Footer />
        {/* <NavigationBtn /> */}


      </Router>


    </div>
  );
}

export default App;
