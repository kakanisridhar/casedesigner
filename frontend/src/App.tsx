import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScreenDesigner from "./pages/ScreenDesigner";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ScreenDesigner />
        </Route>
        <Route path="/learning">Learning chakra ui</Route>
      </Switch>
    </Router>
  );
}

export default App;
