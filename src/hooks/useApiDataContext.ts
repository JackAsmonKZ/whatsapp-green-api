import { useContext } from "react";
import { ApiDataContext } from "../contexts";

const useApiDataContext = () => {
  const context = useContext(ApiDataContext);
  if (!context) {
    throw new Error(
      "useApiDataContext must be used within a ApiDataContextProvider"
    );
  }
  return context;
};

export { useApiDataContext };
