import React from "react";
import { AuthContext } from "./context";

export default Auth = () => {

     const  authContext = React.useMemo(() => {
       return {
         signIn: () => {
           setIsLoading(false);
           setUserToken("asdf");
         },
         signUp: () => {
           setIsLoading(false);
           setUserToken("asdf");
         },
         signOut: () => {
           setIsLoading(false);
           setUserToken(null);
         },
         home: () => {
           setIsLoading(false);
           setUserToken(null);
         },
       };
     }, []);

 
  return authContext();
};
