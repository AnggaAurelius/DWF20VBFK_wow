import { Route, Redirect} from 'react-router-dom';
import React, { useContext } from "react";
import { AppContext } from "./GlobalContext";

export const PremiumRoute = ({component : Component, ...rest}) => {
  const [state] = useContext(AppContext);
    const subscribe = state.subscribe;

    return (
        <Route
          {...rest}
          render = {(props) => 
            subscribe ? <Component {...props}/> : <Redirect to="/sub"/>
          } 
        />
    );
};

export default PremiumRoute;