// utility function to dispatch loading actin to redux
export const loading = () => {
  return {
    type: "LOADING",
  };
};

// utility function to dispatch data redux, when request was successfull
export const requestSuccess = (type, payload) => {
  return {
    type,
    payload,
  };
};

// Redux persist type
export const REHYDRATE = "persist/REHYDRATE";
