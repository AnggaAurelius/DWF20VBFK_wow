import React, { Profiler } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AppContextProvider} from "./component/GlobalContext";
import { PrivateRoute } from "./component/PrivateRoute"
import LandingPage from "./landingPage";
import HomePage from "./homePage";
import Sub from "./homePage/Sub";
import Profile from "./homePage/Profile";
import DetailBook from "./homePage/DetailBook";
import AddBook from "./homePage/AddBook";
import ListTrans from "./homePage/ListTrans";

function App() {
    return (
      <AppContextProvider>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <PrivateRoute exact path="/beranda" component={HomePage} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/sub" exact component={Sub} />
            <Route path="/detail" exact component={DetailBook} />
            <Route path="/addBook" exact component={AddBook} />
            <Route path="/list" exact component={ListTrans} />
          </Switch>
        </Router>
      </div>
      </AppContextProvider>
  );
}

export default App;
