import moment from "moment";

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

// utility fuction to get current date or time
export const getCurrentDateTime = (type) => {
  const current = {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm:ss"),
  };

  return current[type];
};
