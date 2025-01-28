import { useContext } from "react";
import { TabIndexContext } from "../contexts";

const useTabIndexContext = () => {
  const context = useContext(TabIndexContext);
  if (!context) {
    throw new Error("useTabIndex must be used within a TabIndexProvider");
  }
  return context;
};

export { useTabIndexContext };
