import { useContext } from "react";
import { ApiDataContext, ChatMessagesContext } from "../contexts";

const useChatMessagesContext = () => {
  const context = useContext(ChatMessagesContext);
  if (!context) {
    throw new Error(
      "useChatMessagesContext must be used within a ChatMessagesContext"
    );
  }
  return context;
};

export { useChatMessagesContext };
