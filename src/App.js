import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Component/Home/Home';
import Details from './Component/Details/Details';
import NoMatch from './Component/NoMatch/NoMatch';


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
