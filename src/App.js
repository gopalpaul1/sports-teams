import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Component/Home/Home';
import Details from './Component/Details/Details';
import NoMatch from './Component/NoMatch/NoMatch';
import SocialMedia from './Component/SocilaMedia/SocialMedia';


function App() {



  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:idTeam">
            <Details />
          </Route>
          <Route path="/media">
            <SocialMedia />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
