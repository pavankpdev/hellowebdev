import React, { useState } from "react";

const INITIAL_DATA = { isAuth: false, user: {} };

export const CurrentUserContext = React.createContext({
  ...INITIAL_DATA,
  setUser: () => {},
});

export const CurrentUserContextProvider = (props) => {
  const setUser = (userData, isAuth) => {
    setState({ ...state, user: userData, isAuth });
    localStorage.setItem(
      "helloWebDev",
      JSON.stringify({ user: userData, isAuth })
    );
  };
  const [state, setState] = useState({
    isAuth: false,
    user: {},
    setUser: setUser,
  });

  return (
    <CurrentUserContext.Provider value={state}>
      {props.children}
    </CurrentUserContext.Provider>
  );
};
