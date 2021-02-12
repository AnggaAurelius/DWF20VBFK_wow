import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './pages/landingPage/style.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AppContextProvider} from "./component/GlobalContext";
import { PrivateRoute } from "./component/PrivateRoute"
import { PremiumRoute } from "./component/PremiumRoute"
import { AdminRoute } from "./component/AdminRoute"

import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import Sub from "./pages/homePage/Sub";
import Profile from "./pages/homePage/Profile";
import DetailBook from "./pages/homePage/DetailBook";
import Read from "./pages/homePage/ReadEpub";
import AddBook from "./pages/adminPage/AddBook";
import ListTrans from "./pages/adminPage/ListTrans";

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
            <PrivateRoute path="/detail" exact component={DetailBook} />
            <Route path="/read" exact component={Read} />
            <AdminRoute path="/add" exact component={AddBook} />
            <AdminRoute path="/list" exact component={ListTrans} />
          </Switch>
        </Router>
      </div>
      </AppContextProvider>
  );
}

export default App;
