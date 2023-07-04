import { AuthContext } from "helpers/Context";
import React from "react";

// Con este hook, accedemos mas facilmente a la informacion de nuestro Context.
export const useAuth = () => {
  return React.useContext(AuthContext);
};