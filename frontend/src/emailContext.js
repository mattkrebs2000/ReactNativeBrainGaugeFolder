import { createContext } from "react";

const emailContext = createContext({
  email: "",
  setEmailFunction: () => {},
});

export default emailContext;
