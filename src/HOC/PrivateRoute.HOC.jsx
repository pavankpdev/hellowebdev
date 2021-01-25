import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// Context
import { CurrentUserContext } from "../context/auth.context";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { isAuth } = useContext(CurrentUserContext);
  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? (
          <RouteComponent {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: "You need to be signined to add new resoure",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
