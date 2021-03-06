import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Splash from "./pages/Splash/Splash";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app" data-testid="App">
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          {/* Catch all unmatched routes */}
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
