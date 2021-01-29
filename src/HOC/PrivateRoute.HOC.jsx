import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const reduxState = useSelector(({ user }) => ({ user }));

  return (
    <Route
      {...rest}
      render={() =>
        reduxState.user.isAuth ? (
          <RouteComponent {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: "You need to signin to visit that page",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
