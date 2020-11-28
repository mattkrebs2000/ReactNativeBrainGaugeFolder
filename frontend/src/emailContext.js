import { createContext } from "react";

const emailContext = createContext({
  email: "mo@email.com",
  setEmailFunction: () => {},
});

export default emailContext;
