export const darkThemeReactSelect = (error) => ({
  option: (provided, state) => ({
    ...provided,
    borderRaduis: "10rem",
    backgroundColor: "#16213e",
    color: "white",
    padding: 20,

    ":hover": {
      backgroundColor: "#171717",
    },
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "#16213e",
    border: error ? "2px solid #f5365c" : "2px solid #4136f1",
    color: "white",
  }),
  input: (styles) => ({ ...styles, color: "white" }),
  singleValue: (styles) => ({ ...styles, color: "white" }),
  multiValueLabel: (styles) => ({ ...styles, color: "#16213e" }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "#16213e",
  }),
});
//   transition: all 0.5s ease;
