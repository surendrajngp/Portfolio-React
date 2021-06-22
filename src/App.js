import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

function App() {
  // Disable Inspect -------------------
  // disable the right mouse button
  // window.document.oncontextmenu = () => {
  //   return false;
  // };

  // disable replication
  window.document.onselectstart = () => {
    return false;
  };

  // disable F12
  document.onkeydown = (event) => {
    if (window.event && window.event.keyCode == 123) {
      event.keyCode = 0;
      event.returnValue = false;
      return false;
    }
  };

  //-------------------------------------
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
