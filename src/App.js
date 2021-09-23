import './App.css';
import { Switch,Route,Redirect } from 'react-router';
import Navbar from './component/Navbar'
import Cv from './component/Cv';
import AboutMe from './component/AboutMe';
import CompletedProjects from './component/CompletedProjects';
import Contact from './component/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Cv}></Route>
        <Route exact path="/about" component={AboutMe}></Route>
        <Route exact path="/project" component={CompletedProjects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
