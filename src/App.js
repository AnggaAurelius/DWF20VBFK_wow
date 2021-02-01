import React, { Profiler } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './landingPage/style.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AppContextProvider} from "./component/GlobalContext";
import { PrivateRoute } from "./component/PrivateRoute"
import { PremiumRoute } from "./component/PremiumRoute"
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
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/sub" exact component={Sub} />
            <PremiumRoute path="/detail" exact component={DetailBook} />
            <Route path="/add" exact component={AddBook} />
            <Route path="/list" exact component={ListTrans} />
          </Switch>
        </Router>
      </div>
      </AppContextProvider>
  );
}

export default App;
